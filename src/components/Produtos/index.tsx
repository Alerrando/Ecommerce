import { Cards } from "../Cards";
import { Titulo } from "../Titulo";

export const cardsInfo = {
    fileira1: {
        card1: {
            url: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
            titulo: "Iphone",
            subTitulo: "Pro Max",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },

        card2: {
            url: "https://images.unsplash.com/photo-1598717873846-0418a74950f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
            titulo: "Apple",
            subTitulo: "Watch",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },

        card3: {
            url: "https://images.unsplash.com/photo-1543854651-42d750ab10b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80",
            titulo: "Camera",
            subTitulo: "Clicking Camera",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },
    },

    fileira2: {
        card1: {
            url: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            titulo: "Notebook",
            subTitulo: "Dell Inspiron 3000",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },

        card2: {
            url: "https://images.unsplash.com/photo-1544244015-9c72fd9c866d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80",
            titulo: "iPad",
            subTitulo: "Pro 2018",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },

        card3: {
            url: "https://images.unsplash.com/photo-1602837385569-08ac19ec83af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
            titulo: "Hardware",
            subTitulo: "Core i9",
            descrição : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod qui delectus repudiandae eum? \
            Tempora rem aliquam, quo aut repellat omnis laboriosam molestiae error qui magnam quae suscipit sint esse. \
            Commodi?",
        },
    }
}

export function Produtos(){
    return (
        <div>
            <Titulo name="Promoção" />
            <section>
                <Cards />
            </section>
        </div>
    )
}