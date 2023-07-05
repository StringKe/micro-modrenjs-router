import {useModuleApps} from "@modern-js/plugin-garfish/runtime";

export default function () {
    const {Product} = useModuleApps();

    return <div>
        <div>/routers/product/layout.tsx</div>
        <Product></Product>
        <div>/routers/product/layout.tsx end</div>
    </div>
}
