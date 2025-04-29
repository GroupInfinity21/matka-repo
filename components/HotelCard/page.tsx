import React from 'react';
import { Star, Bed, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface HotelCardProps {
  name: string;
  location: string;
  rating: number;
  price: number;
  currency: string;
  imageUrl: string;
  amenities: string[];
}

const HotelCard = ({
  name,
  location,
  rating,
  price,
  currency,
  imageUrl,
  amenities
}: HotelCardProps) => {
  return (
    <Card className="overflow-hidden max-w-md w-full border border-border hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-white text-primary-foreground bg-opacity-90 flex items-center gap-1 px-2">
            <Star size={14} className="fill-yellow-400 stroke-yellow-400" />
            <span className="font-medium text-gray-800">{rating.toFixed(1)}</span>
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <h3 className="font-bold text-lg text-left mb-1">{name}</h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin size={14} className="mr-1" />
          <p className="text-sm">{location}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {amenities.map((amenity, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-gray-50">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2 pb-4 border-t">
        <div className="text-left">
          <span className="text-2xl font-bold">{currency}{price}</span>
          <span className="text-muted-foreground text-sm ml-1">/ noite</span>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Reservar agora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;