import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { id: 1, name: "Sarah Johnson", service: "Deep Home Cleaning", rating: 5, text: "Absolutely amazing service! The team was professional, thorough, and left my home spotless.", avatar: "SJ", date: "2 days ago" },
  { id: 2, name: "Mike Chen", service: "Pipe Repair", rating: 5, text: "Fixed a tricky leak in under an hour. Fair pricing and great communication throughout.", avatar: "MC", date: "1 week ago" },
  { id: 3, name: "Priya Patel", service: "Interior Painting", rating: 4, text: "Beautiful work on our living room. Colors look exactly as we wanted. Will book again!", avatar: "PP", date: "2 weeks ago" },
  { id: 4, name: "David Smith", service: "House Shifting", rating: 5, text: "Stress-free moving experience. Everything arrived safely and on time. Highly recommended!", avatar: "DS", date: "3 weeks ago" },
  { id: 5, name: "Anita Roy", service: "Laundry & Ironing", rating: 4, text: "Convenient pickup and delivery. Clothes came back perfectly pressed. Great value.", avatar: "AR", date: "1 month ago" },
  { id: 6, name: "James Wilson", service: "Water Tank Cleaning", rating: 5, text: "Professional and hygienic tank cleaning. Noticed improvement in water quality immediately.", avatar: "JW", date: "1 month ago" },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-4">
            Trusted by Thousands
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Our Customers Say</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Real reviews from real customers who found the perfect service on Servico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 card-shadow border border-border hover:border-accent/20 transition-all"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-3" />
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`w-3.5 h-3.5 ${j < review.rating ? "text-accent fill-accent" : "text-muted-foreground/30"}`} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-sm font-semibold text-accent">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.service} · {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
