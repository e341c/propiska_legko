import Image from "next/image"
import circle from "../../public/icons/circle-regular.svg"

export default function InfoPros() {
    return (
        <section className="mb-5 d-flex flex-column align-items-center">
            <h1 className="display-6 mb-4 text-center">Прописка без посредников</h1>
            <div>
                <div className="d-flex align-items-center mb-3">
                    <div className="position-relative color-pr">
                        <div className="position-absolute top-50 start-50 translate-middle fs-3">1</div>
                        <Image src={circle} height={60} className="color-filter" />
                    </div>
                    <div className="ms-3 fs-6">
                        <div className="fw-bold">Быстро</div>
                        <div>Процедура регистрации длится примерно 15 минут</div>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="position-relative color-pr">
                        <div className="position-absolute top-50 start-50 translate-middle fs-3">2</div>
                        <Image src={circle} height={60} className="color-filter" />
                    </div>
                    <div className="ms-3 fs-6">
                        <div className="fw-bold">Надёжно</div>
                        <div>100% гарантия</div>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="position-relative color-pr">
                        <div className="position-absolute top-50 start-50 translate-middle fs-3">3</div>
                        <Image src={circle} height={60} className="color-filter" />
                    </div>
                    <div className="ms-3 fs-6">
                        <div className="fw-bold">Без посредников</div>
                        <div>Прописываем в свою собственную недвижимость</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
