import { Card, CardContent } from '@/components/ui/card'
import { Clock, ShoppingBag, BarChart, Users, DollarSign } from 'lucide-react'

const features = [
  {
    title: "Quick Deployment",
    description: "Setup your business within hours with our expert team's assistance. Seamless integration with your existing systems.",
    icon: <Clock className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Seamless Ordering",
    description: "No app download required. Works via a simple web interface. Customers can easily browse, customize, and place orders.",
    icon: <ShoppingBag className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Real-Time Tracking",
    description: "Customers can track their orders in real-time, reducing counter inquiries and improving overall satisfaction.",
    icon: <BarChart className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Increased Efficiency",
    description: "Streamline your operations, reduce wait times, and serve more customers during peak hours.",
    icon: <Users className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Data Insights",
    description: "Gain valuable insights into customer preferences and behaviors to optimize your menu and operations.",
    icon: <BarChart className="h-12 w-12 text-orange-500" />
  },
  {
    title: "Boost Revenue",
    description: "Increase order volume and average order value with personalized upselling recommendations.",
    icon: <DollarSign className="h-12 w-12 text-orange-500" />
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-900">Why Choose BiteCart?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-orange-800">{title}</h3>
        <p className="text-orange-700">{description}</p>
      </CardContent>
    </Card>
  )
}

