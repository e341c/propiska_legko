import Image from "next/image"
import styles from "./page.module.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import InfoDistricts from "@/components/infoDistricts"
import InfoPros from "@/components/infoPros"
import InfoNeed from "@/components/infoNeed"
import InfoHead from "@/components/infoHead"

export default function Home() {
    return (
        <main className="font">
            <Header />
            <section className="container p-4" style={{marginTop: "80px"}}>
                <InfoHead />
                <InfoDistricts />
                <InfoNeed />
                <InfoPros />
            </section>
            <Footer />
        </main>
    )
}
