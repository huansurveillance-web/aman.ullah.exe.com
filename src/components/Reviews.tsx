import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquareText, Send, CheckCircle2 } from "lucide-react";
import { rtdb, isFirebaseConfigured } from "../firebase";
import { SAMPLE_REVIEWS, type Review } from "../data";
import {
  ref,
  push,
  onValue,
  query,
  orderByChild,
  limitToLast,
  serverTimestamp,
} from "firebase/database";

const StarRow: React.FC<{ rating: number; size?: string }> = ({ rating, size = "h-4 w-4" }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`${size} ${i <= rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
      />
    ))}
  </div>
);

const timeAgo = (ms: number) => {
  const days = Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years > 1 ? "s" : ""} ago`;
};

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(SAMPLE_REVIEWS);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Live-sync with every visitor as soon as Firebase is configured.
  useEffect(() => {
    if (!rtdb) return;
    const reviewsQuery = query(ref(rtdb, "reviews"), orderByChild("createdAt"), limitToLast(30));
    const unsubscribe = onValue(
      reviewsQuery,
      (snapshot) => {
        const live: Review[] = [];
        snapshot.forEach((child) => {
          const data = child.val();
          live.push({
            id: child.key as string,
            name: data.name,
            rating: data.rating,
            comment: data.comment,
            createdAt: typeof data.createdAt === "number" ? data.createdAt : Date.now(),
          });
        });
        live.reverse(); // newest first
        setReviews(live.length > 0 ? live : SAMPLE_REVIEWS);
      },
      () => setReviews(SAMPLE_REVIEWS)
    );
    return () => unsubscribe();
  }, []);

  const average =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "5.0";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!rtdb) {
      setError("Review submissions will open shortly. Please check back soon.");
      return;
    }

    setIsSubmitting(true);
    try {
      await push(ref(rtdb, "reviews"), {
        name: name.trim(),
        rating,
        comment: comment.trim(),
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
      setName("");
      setComment("");
      setRating(5);
    } catch (err) {
      setError("Something went wrong sending your review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#0b2e5902_1px,transparent_1px)] bg-[size:15px_15px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent rounded-full" />
            Customer Feedback
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            Real feedback from businesses and institutions we've secured across Pakistan. Every review here is visible to all visitors.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="font-display font-extrabold text-3xl text-navy-950">{average}</span>
            <div className="flex flex-col items-start">
              <StarRow rating={Math.round(Number(average))} />
              <span className="text-xs text-slate-400 font-medium mt-0.5">
                Based on {reviews.length} review{reviews.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Review List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center font-display font-bold text-sm shrink-0">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="text-navy-950 font-bold text-sm truncate">{review.name}</div>
                    <div className="text-slate-400 text-[11px] font-medium">{timeAgo(review.createdAt)}</div>
                  </div>
                </div>
                <div className="mt-3">
                  <StarRow rating={review.rating} />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light mt-2">
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Write a Review Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-150 shadow-md sticky top-24">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="review-form"
                  id="review-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <MessageSquareText className="h-5 w-5 text-accent" />
                    <h3 className="font-display font-extrabold text-navy-950 text-xl tracking-tight">
                      Share Your Experience
                    </h3>
                  </div>
                  <p className="text-slate-400 text-xs font-light -mt-3">
                    Your review will be visible to every visitor on this page.
                  </p>

                  {/* Star Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Your Rating *
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <button
                          key={i}
                          type="button"
                          id={`review-star-${i}`}
                          onClick={() => setRating(i)}
                          onMouseEnter={() => setHoverRating(i)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-0.5"
                        >
                          <Star
                            className={`h-7 w-7 transition-colors ${
                              i <= (hoverRating || rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-200"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="review-form-name"
                      type="text"
                      required
                      maxLength={80}
                      placeholder="Muhammad Ali"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Your Feedback *
                    </label>
                    <textarea
                      id="review-form-comment"
                      required
                      rows={4}
                      maxLength={1000}
                      placeholder="Tell other customers about your experience with our team and installation..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-500 font-medium">{error}</p>
                  )}

                  <button
                    id="review-form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy-900 hover:bg-accent text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Review
                      </>
                    )}
                  </button>

                  {!isFirebaseConfigured && (
                    <p className="text-[11px] text-slate-400 text-center font-light">
                      Review submissions open shortly.
                    </p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="review-success"
                  id="review-form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-5"
                >
                  <div className="inline-flex p-4 bg-emerald-50 rounded-full text-emerald-500 border border-emerald-100">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-2xl text-navy-950">Thank You!</h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Your review has been posted and is now visible to every visitor on this page.
                    </p>
                  </div>
                  <button
                    id="write-another-review-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent hover:text-accent-hover text-xs font-bold uppercase tracking-wider"
                  >
                    Write Another Review
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
