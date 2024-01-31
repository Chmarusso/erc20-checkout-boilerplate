import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <ProductCard product={{
          image: "/headset-photo.png",
          name: "Futuristic VR Headset",
          price: 19
        }} 
      />
    </>
  )
}
