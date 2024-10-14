'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GitCompare, Users } from "lucide-react"

export default function Component() {
  const [api, setApi] = React.useState<any>()
  
  const handleItemClick = (item: string) => {
    console.log(`Clicked on ${item}`)
    // Add your click handling logic here
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <Carousel
        setApi={setApi}
        className="relative w-full h-full"
        opts={{
        align: "center",
        loop: true,
      }}
      >
      <CarouselContent className="h-full">
        <CarouselItem className="h-full flex items-center justify-center">
          <div
            className="w-full max-w-md cursor-pointer transition-all hover:scale-105"
              onClick={() => handleItemClick("Git Roster")}
            >
              <Card className="border-4 border-primary">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <Users className="mx-auto h-20 w-20 text-primary" />
                    <span className="mt-4 block text-3xl font-bold text-primary">Git Roster</span>
                  </div>
                </CardContent>
              </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="h-full flex items-center justify-center">
          <div
            className="w-full max-w-md cursor-pointer transition-all hover:scale-105"
            onClick={() => handleItemClick("Git Compare")}
          >
            <Card className="border-4 border-primary">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="text-center">
                  <GitCompare className="mx-auto h-20 w-20 text-primary" />
                  <span className="mt-4 block text-3xl font-bold text-primary">Git Compare</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <CarouselPrevious variant="secondary" size="lg" className="h-12 w-12" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <CarouselNext variant="secondary" size="lg" className="h-12 w-12" />
      </div>
    </Carousel>
  </div>
  )
}
