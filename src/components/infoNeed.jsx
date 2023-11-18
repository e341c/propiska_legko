import hospital from "../../public/icons/hospital-solid.svg"
import briefcase from "../../public/icons/briefcase-solid.svg"
import address_card from "../../public/icons/address-card-solid.svg"
import children from "../../public/icons/children-solid.svg"
import id_card from "../../public/icons/id-card-solid.svg"
import landmark from "../../public/icons/landmark-solid.svg"
import passport from "../../public/icons/passport-solid.svg"
import building from "../../public/icons/building-columns-solid.svg"
import Image from "next/image"

export default function InfoNeed() {
    return (
        <section className="mb-5 row d-flex justify-content-center gap-3">
            <h1 className="display-6 mb-4 text-center">Для чего нужна регистрация</h1>
            <div className="col-sm-4 d-flex flex-column align-items-center shadow p-4 rounded">
                <Image src={hospital} height={36} className="color-filter mt-1" />
                <div className="text-center mt-3">Для медицинского обслуживания</div>
            </div>

            <div className="col-sm-4 d-flex flex-column align-items-center shadow p-4 rounded">
                <Image src={passport} height={40} className="color-filter mt-1" />
                <div className="text-center mt-3">Для получение визы</div>
            </div>

            <div className="col-sm-4 d-flex flex-column align-items-center shadow p-4 rounded">
                <Image src={children} height={40} className="color-filter mt-1" />
                <div className="text-center mt-3">Для детей в детский сад и школу</div>
            </div>

            <div className="col-sm-4 d-flex flex-column align-items-center shadow p-4 rounded">
                <Image src={building} height={38} className="color-filter mt-1" />
                <div className="text-center mt-3">Для поступление в ВУЗ</div>
            </div>

            <div className="col-sm-4 d-flex flex-column align-items-center shadow p-4 rounded">
                <Image src={address_card} height={38} className="color-filter mt-1" />
                <div className="text-center mt-3">Для получения ИИН, паспорта, удостоверение личности</div>
            </div>

            <div className="col-sm-4 d-flex flex-column align-items-center shadow p-4 rounded">
                <Image src={landmark} height={40} className="color-filter mt-1" />
                <div className="text-center mt-3">Для оформления пенсий, пособий и кредитов</div>
            </div>

            <div className="col-sm-4 d-flex flex-column align-items-center shadow p-4 rounded">
                <Image src={briefcase} height={40} className="color-filter mt-1" />
                <div className="text-center mt-3">Для работодателя и предоставление на работу</div>
            </div>

            <div className="col-sm-4 d-flex flex-column align-items-center shadow p-4 rounded">
                <Image src={id_card} height={38} className="color-filter mt-1" />
                <div className="text-center mt-3">Для водительского удостоверения</div>
            </div>

        </section>
    )
}
