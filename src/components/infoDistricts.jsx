import Image from "next/image"
import check_mark from "../../public/icons/circle-check-regular.svg"
import map_pin from "../../public/icons/map-pin-solid.svg"

export default function InfoDistricts() {
    const districts = ["Медеуский район", "Ауэзовский район"]
    const reasons = ["Самые низкие цены по Алматы", "Работаем без посредников", "Бесплатное сопровождение", "Прописка временная", "Прописка постоянная"]

    return (
        <section className="mb-5">
            <div className="row gap-3">
                <div className="col-sm bg-blue-light rounded text-light py-3 px-4 shadow">
                    <h4 className="mt-2">Наши районы:</h4>
                    {districts.map((item) => (
                        <div className="d-flex align-items-center my-3">
                            <Image src={map_pin} height={26} className="white-filter me-1" />
                            <div className="ms-2 fs-5 fw-medium">{item}</div>
                        </div>
                    ))}
                </div>

                <div className="col-sm bg-blue-light rounded text-light py-3 px-4 shadow">
                    <h4 className="mt-2">Наши плюсы:</h4>
                    {reasons.map((item) => (
                        <div className="d-flex align-items-center my-3">
                            <Image src={check_mark} height={26} className="white-filter me-1" />
                            <div className="ms-2 fs-5 fw-medium">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
