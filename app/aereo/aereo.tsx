import { NavigationAreo } from "@/components/navigationAereo";
import { HeroAreo } from "@/components/heroAereo";
import OfferDayAereo from "@/components/offerDayAereo/page";
import { CommunityOffers } from "@/components/communityOffers/page";

export  function Aereo (){
    return(
        <div className="min-h-screen">
            <NavigationAreo />
            <HeroAreo/>
            <OfferDayAereo/>
        </div>
    )
}

