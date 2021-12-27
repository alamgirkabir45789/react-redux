import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap"

const CustomOffCanvas = ( { children, title, canvasOpen } ) => {
    return (
        <Offcanvas
            isOpen={canvasOpen}
            direction="end"
            scrollable
            toggle={function noRefCheck() { }}

        >
            <OffcanvasHeader toggle={function noRefCheck() { }}>
                {title}
            </OffcanvasHeader>
            <OffcanvasBody>
                <strong>
                    {children}
                </strong>
            </OffcanvasBody>
        </Offcanvas>
    )
}

export default CustomOffCanvas
