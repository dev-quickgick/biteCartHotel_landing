import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    quote: "BiteCart has revolutionized our room service operations. Guest satisfaction scores have improved by 40% since implementation!",
    author: "Rajesh Mehta",
    role: "General Manager, The Grand Oberoi Mumbai"
  },
  {
    quote: "The digital ordering system has reduced our service delivery time by 50%. Our guests particularly love the real-time status updates.",
    author: "Priya Sharma",
    role: "Operations Director, Taj Palace Delhi"
  },
  {
    quote: "BiteCart's analytics helped us optimize our menu and staffing. We've seen a 35% reduction in operational costs and improved efficiency.",
    author: "Vikram Singh",
    role: "Hotel Manager, ITC Royal Bengal"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-900">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <p className="text-lg mb-4 italic">"{quote}"</p>
        <div className="font-semibold">{author}</div>
        <div className="text-orange-600">{role}</div>
      </CardContent>
    </Card>
  )
}

