import { Feature } from './Feature';
import style from './Features.module.css';

export function FeaturesMap(params) {
    return (
        <section className={style.featuresList}>
            {params.list.map((item, index) => 
                <Feature key={index} data={item} />)}
        </section>
    );
}

// export function FeaturesMap(params) {
//     function x(item, index) {
//         return <Feature key={index} data={item} />;
//     }
//     return (
//         <section className={style.featuresList}>
//             {params.list.map(x)}
//         </section>
//     );
// }