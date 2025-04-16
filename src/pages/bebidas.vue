<script>
import { ref, watch, onUpdated } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();

    const carrinho = carrinhoStore();

    const Bebidas = ref({
      tipos: [
        {
          nome: "Maracujá - Copo",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Abacaxi - Copo",
          preco: 5.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Acerola - Copo",
          preco: 5.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Limonada - Copo",
          preco: 5.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Abacaxi Com Hortelã - Copo",
          preco: 5.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Laranja Com Morango - Copo",
          preco: 9.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Maracujá - Jarra",
          preco: 13.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Abacaxi - Jarra",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Acerola - Jarra",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Limonada - Jarra",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Abacaxi Com Hortelã - Jarra",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Laranja Com Morango - Jarra",
          preco: 20.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Stella Artois Long Neck",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Heineken Long Neck",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Spaten Long Neck",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        { nome: "Spaten 600ml", preco: 14.0, quantidade: 0, descricao: "" },
        {
          nome: "Ice Long Neck",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Brahma Duplo 600ml",
          preco: 11.0,
          quantidade: 0,
          descricao: "",
        },
        { nome: "água Sem Gás", preco: 3.0, quantidade: 0, descricao: "" },
        { nome: "água Com Gás", preco: 4.0, quantidade: 0, descricao: "" },
        { nome: "água de Coco", preco: 5.0, quantidade: 0, descricao: "" },
        { nome: "Redbull", preco: 14.0, quantidade: 0, descricao: "" },
        { nome: "Lemon Fresh", preco: 6.0, quantidade: 0, descricao: "" },
        {
          nome: "Coca-cola Lata",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        { nome: "Coca-cola 1l", preco: 10.0, quantidade: 0, descricao: "" },
        { nome: "Guárana Lata", preco: 6.0, quantidade: 0, descricao: "" },
        { nome: "Guárana 1l", preco: 8.0, quantidade: 0, descricao: "" },
        {
          nome: "Fanta Laranja Lata",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        { nome: "Pepse 1l", preco: 8.0, quantidade: 0, descricao: "" },
        {
          nome: "Schewppes Lata",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Coca Cola Zero Lata",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Coca Cola Zero Litro",
          preco: 11.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Ypioca Prata Dose",
          preco: 2.5,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Ypioca Ouro Dose",
          preco: 3.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Ypioca Lima Limão Dose",
          preco: 3.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Ypioca 150 Dose",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Rum Cristal Dose",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Rum Carta Branca Dose",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Campari Dose",
          preco: 6.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Cachaça 51 Dose",
          preco: 3.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Black e White Dose",
          preco: 7.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Red Label Dose",
          preco: 12.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Orloff Dose",
          preco: 4.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Smirnoff Dose",
          preco: 5.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Dreher Dose",
          preco: 4.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Ypioca Prata Litro",
          preco: 30.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Ypioca Ouro Litro",
          preco: 35.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Ypioca Lima Limão Litro",
          preco: 35.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Ypioca 150 Litro",
          preco: 110.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Rum Cristal Litro",
          preco: 45.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Rum Carta Branca Litro",
          preco: 45.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Compari Litro",
          preco: 80.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Cachaça 51 Litro",
          preco: 35.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Black e White Litro",
          preco: 100.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Red Label Litro",
          preco: 200.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Orloff Litro",
          preco: 70.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Smirnoff Litro",
          preco: 80.0,
          quantidade: 0,
          descricao: "",
        },
        {
          nome: "Dreher Litro",
          preco: 45.0,
          quantidade: 0,
          descricao: "",
        },
      ],
    });

    function salvarPedido() {
      carrinho.bebidas.push(Bebidas.value);

      router.push("/");

      toast.success("Adicionado com sucesso!", {
        timeout: 2000,
        position: "top-right",
        icon: false,
        showCloseButtonOnHover: true,
      });
    }

    function voltar() {
      router.push("/");
    }

    return {
      Bebidas,
      salvarPedido,
      voltar,
    };
  },
};
</script>

<template>
  <div id="cardapio">
    <div id="listar">
      <div class="dotted-line">
        <hr />
        <span id="textDividers">Bebidas</span>
        <hr />
      </div>
      <div v-for="(item, index) in Bebidas.tipos" :key="item">
        <button class="botao1" @click="item.quantidade++">+</button>

        <button
          v-if="item.quantidade > 0"
          class="botao2"
          @click="item.quantidade--"
        >
          -
        </button>

        <label style="pointer-events: none" id="nomeItem" for="adicional"
          ><span id="quantidadeDiv">{{ item.quantidade }}x</span>
          {{ item.nome }}</label
        >
        <label id="preco">R$: {{ item.preco.toFixed(2) }}</label>
        <p id="itens"></p>
        <br />
      </div>

      <button @click="salvarPedido" id="butOpcoes" type="submit" value="Submit">
        adicionar
      </button>

      <button id="butOpcoes2" @click="voltar()" type="submit" value="Submit">
        voltar
      </button>
    </div>
  </div>
</template>

<style>
#observacao {
  padding: 5px;
  margin-bottom: 20px;
  height: 60px;
}

#quantidadeDiv {
  font-weight: bold;
  color: #ff4f01;
  font-size: 20px;
}

#textDividers {
  color: #ff4f01;
  font-family: "Harrison-Rough";
  text-transform: uppercase;
  font-size: 40px;
  font-weight: lighter;
}

.dotted-line {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.dotted-line hr {
  flex: 1;
  border: none;
  border-top: 2px dashed white;
  margin: 0 10px;
}

.dotted-line span {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.botao1 {
  background-color: #ff4f01;
  color: #000000;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  width: 35px;
  margin-right: 2px;
}

.botao2 {
  background-color: #ff4f01;
  color: #000000;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  width: 35px;
  margin-left: 2px;
}

#nomeItem {
  font-size: 16px;
  margin-left: 7px;
}

#tituloRadio {
  display: flex;
  align-items: center;
}

#tituloDoRadio {
  margin-left: 3px;
}

input[type="radio"] {
  margin-left: -3px;
  border: 0px;
  width: 30px;
  height: 2em;
  accent-color: #f27141;
}
</style>
