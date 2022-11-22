import ItemDetailContainer from "../components/ItemDetailContainer";
import { Layout } from "../components/Layout";

const ItemView = () => {
    /* const { category } = useParams(); */
    // const categories = item.filter((product) => product.category === category);

    return (
        <Layout>
        <ItemDetailContainer/>
        </Layout>
    );
};

export default ItemView;