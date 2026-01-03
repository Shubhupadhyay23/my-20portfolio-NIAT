import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const engineeringImages = [
  {
    id: 1,
    title: "Building the Future",
    emoji: "🏗️",
    gradient: "from-blue-400 to-blue-600",
    description: "Constructing amazing projects",
  },
  {
    id: 2,
    title: "Code & Creativity",
    emoji: "💻",
    gradient: "from-purple-400 to-purple-600",
    description: "Writing elegant solutions",
  },
  {
    id: 3,
    title: "Innovation Drives Us",
    emoji: "🚀",
    gradient: "from-orange-400 to-orange-600",
    description: "Launching new ideas",
  },
  {
    id: 4,
    title: "Problem Solving",
    emoji: "🔧",
    gradient: "from-red-400 to-red-600",
    description: "Fixing the unfixable",
  },
  {
    id: 5,
    title: "Engineering Excellence",
    emoji: "⚙️",
    gradient: "from-green-400 to-green-600",
    description: "Perfecting every detail",
  },
  {
    id: 6,
    title: "Automation Magic",
    emoji: "🤖",
    gradient: "from-cyan-400 to-cyan-600",
    description: "Making work smarter",
  },
];

export default function ImageCarousel() {
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <div className="w-full mt-12 mb-8">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {engineeringImages.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative h-48 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 group-hover:opacity-100 transition-all duration-300`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl mb-3 animate-bounce group-hover:animate-pulse">
                    {item.emoji}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Mobile swipe indicator */}
      <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">
        ← Swipe to explore →
      </p>
    </div>
  );
}
