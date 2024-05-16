import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
import { useEffect, useRef } from 'react';

const EditableTable = ({ data }) => {
    const hotTableRef = useRef(null);

    useEffect(() => {
        const hot = new Handsontable(hotTableRef.current, {
            data: data,
            rowHeaders: true,
            colHeaders: true,
            contextMenu: true,
            filters: true,
            dropdownMenu: true,
            licenseKey: 'non-commercial-and-evaluation'
        });

        return () => {
            hot.destroy();
        };
    }, [data]);

    return (
        <div ref={hotTableRef}></div>
    );
};

export default EditableTable;