import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="p-4 bg-body-secondary">
            <Container >
                <div className="row gap-3">
                    <div className="col-sm color-pr fw-bold">
                        <span>г. Алматы</span>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center row gap-3">
                            <Link href={"tel:+77017158540"} className="col btn btn-light fw-semibold color-pr px-4">
                                Позвонить
                            </Link>
                            <Link href={"https://api.whatsapp.com/send?phone=77017158540"} className="col btn btn-light fw-semibold color-pr px-4">
                                Whats App
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
