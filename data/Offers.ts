
export interface OfferCardProps {
    title: string;
    image: string;
    discountedPrice: string;
    destination: string;
    peoples: string;
    date?: string;
    validUntil: string;
    className?: string;
    onClick?: () => void;
}

export interface Offer {
    title: string;
    image: string;
    discountedPrice: string;
    destination: string;
    validUntil: string;
    date?: string;
    peoples: string
  }
  

export const offerBigOffer: Offer[] = [
    {
      title: "Golden Gramado resort",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378406066.jpg?k=406739133c166d4545e02f2b1d1a01c0fc72bcbe7782d5545897172237d6c120&o=&hp=1",
      discountedPrice: "R$ 2.500,00",
      destination: "RS-235, 31000 - KM 31 - CARAZAL, Gramado - RS, 95675-500 ",
      date: '07 a 14 de agosto',
      validUntil: "07 a 14 de agosto",
      peoples: '5'
    }
];


export const offerData: Record<string, OfferCardProps[]> = {
    hoteis: [
        {
          title: "My Mabu ",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/280396497.jpg?k=4ebf827879e45bc1d37b572fb71a2027811140ba1eda2d2e795ac1edbb54983b&o=&hp=1",
          discountedPrice: "R$ 4.500",
          destination: "Rua Dr. Alberto Abujamra, 756 Dona Amanda, CEP, 85853-734",
          validUntil: "Ver Detalhes",
          date: '19 a 26/04 – Páscoa, 28/06 a 05/07 – Férias Escolares, 01 a 08/11 - Finados',
          peoples: '4'
        },
        {
          title: "Praia do Lago Eco Resort",
          image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1000",
          discountedPrice: "R$ 1.875,00 - R$ 3.750,00",
          destination: "praia do muro alto - pernambuco",
          date: '17/04/2025 à 24/05/2025 , 08/05/2025 à 15/05/2025 - Dia das Mães, 14/8/2025 a 21/08/2025, 02/10/2025 a 09/10/2025, 11/12/2025 a 18.12.2025* (02 apartamentos)',
          validUntil: "Veja os detalhes",
          peoples: '4'
        },
        {
          title: "Ipioca Beach Resort",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/288200163.jpg?k=148bba13278f643b8dd181f6a1980b0068f769323d9b35408c036fdee80d98bd&o=&hp=1",
          discountedPrice: "R$ 4.250",
          destination: "Alagoas",
          date: '29/11/2025 a 06/12/2025',
          validUntil: "Veja os detalhes",
          peoples: '4 adultos e 1 criança de até 8 anos'
        },
        {
          title: "porto alto resort (GAV)",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/606026963.jpg?k=584f090e0e9efd074e7f145696aaec151bcbf1e901ef62c4b1603ffb8d437a8a&o=&hp=1",
          discountedPrice: "R$ 3.725,00 - R$ 5.000",
          destination: "Caldas Novas-GO",
          date: '11/05/2025 á 18/05/2025, 24/08/2025 á 31/08/2025, 09/11/2025 á 16/11/2025',
          validUntil: "Veja os detalhes",
          peoples: '5'
        },
        {
          title: "Beach Resort",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343364850.jpg?k=fa29a2918f3a9648e9201be6c524e7e435774072b379792e12ecffd9736b9cb5&o=",
          discountedPrice: "R$ 2.250,00",
          destination: "Rua das Dunas – Praia de Tucuns, S/N – Bosque, Búzios – RJ, 28954-660",
          date: "03/08/2025 à 06/08/2025, 08/08/2025 à 10/08/2025",
          validUntil: "Veja os detalhes",
          peoples: "4"
        },
        {
          title: "Wanderlust Experience Hotel",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493574621.jpg?k=1fe55804b8646e1e45bd5a443f514a6dc974fdf38b080228b8ffbf2ee26ef5f0&o=&hp=1",
          discountedPrice: "R$ 4.500,00",
          destination: "R. das Acácias, 330 - Jardim Miraflores, Campos do Jordão - SP, 12460-670",
          date: "31/07/2025 à 03/08/2025",
          validUntil: "Veja os detalhes",
          peoples: "5"
        },
        {
          title: "Olímpia Park Resort",
          image: "https://termasdeolimpia.com.br/images/resorts/enjoy_olimpia/enjoy_olimpia%20(1).webp",
          discountedPrice: "R$ 1.250,00 - R$ 2.625,00",
          destination: "Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000",
          date: "15/05/2025 à 18/05/2025, 14/08/2025 à 17/08/2025, 30/10/2025 à 06/11/2025",
          validUntil: "Veja os detalhes",
          peoples: "6"
        },
        {
          title: "Búzios Beach Resort",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343364850.jpg?k=fa29a2918f3a9648e9201be6c524e7e435774072b379792e12ecffd9736b9cb5&o=",
          discountedPrice: "R$ 1.812,50",
          destination: "Rua das Dunas - Praia de Tucuns, S/N - Bosque, Búzios - RJ, 28954-660",
          date: "17/08/2025 à 24/08/2025",
          validUntil: "Veja os detalhes",
          peoples: "4"
        },
        {
          title: "Ondas Praia Resort",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/298578608.jpg?k=53811b9bd61fe6ab5ee3e69a513eba378bc6a6240b01d9190fa871666c047bc2&o=&hp=1",
          discountedPrice: "R$ 2.250,00",
          destination: "Av. Beira Mar 12, BR 367, KM 75, Praia do Mutá, Porto Seguro – BA, CEP: 45810-000",
          date: "25/05/2025 à 01/06/2025, 17/08/2025 à 24/08/2025",
          validUntil: "Veja os detalhes",
          peoples: "5"
        },
        {
          title: "Olímpia Park Resort",
          image: "https://termasdeolimpia.com.br/images/resorts/enjoy_olimpia/enjoy_olimpia%20(1).webp",
          discountedPrice: "R$ 1.250,00 - R$ 2.250,00",
          destination: "Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000",
          date: "30/04/2025 à 04/05/2025, 11/05/2025 à 15/05/2025, 24/08/2025 à 28/08/2025, 11/09/2025 à 14/09/2025, 09/12/2025 à 13/12/2025, 18/12/2025 à 21/12/2025, 21/12/2025 à 25/12/2025",
          validUntil: "Veja os detalhes",
          peoples: "6"
        },
        {
          title: "Olímpia Park Resort",
          image: "https://termasdeolimpia.com.br/images/resorts/enjoy_olimpia/enjoy_olimpia%20(1).webp",
          discountedPrice: "R$ 1.250,00 - R$ 1.500,00",
          destination: "Av. Aurora Forti Neves, 1.030 - Santa Ifigênia, Olímpia - SP, 15400-000",
          date: "15/06/2025 à 18/06/2025, 31/08/2025 à 04/09/2025, 04/12/2025 à 07/12/2025, 07/12/2025 à 11/12/2025",
          validUntil: "Veja os detalhes",
          peoples: "8"
        }
      ],
};

