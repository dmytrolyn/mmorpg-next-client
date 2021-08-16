import styles from './styles/styles.module.css';
import Breadcrumbs, { BreadcrumbsProps } from 'nextjs-breadcrumbs';

const BreadcrumbsComponent = () => {
    const bcProps: BreadcrumbsProps = {
        containerClassName: styles.breadcrumbs,
        listClassName: styles.list,
        inactiveItemClassName: styles.inactive,
        activeItemClassName: styles.active,
        transformLabel: (title: string) => {
            return title.charAt(0).toUpperCase() + title.slice(1);
        }
    }
    return (
        <Breadcrumbs {...bcProps} />
    )
}

export default BreadcrumbsComponent;