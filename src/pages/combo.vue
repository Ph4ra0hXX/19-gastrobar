<script>
import { ref, watch, onUpdated } from "vue";
import { carrinhoStore } from "../store/produtos";
import { useToast } from "vue-toastification";
import router from "../router/index";

export default {
  setup() {
    const toast = useToast();

    const carrinho = carrinhoStore();

    const Burger = ref({
      Pao: [
        {
          nome: "Frango à Parmegiana Individual",
          preco: 29.0,
          descricao: "Acompanha arroz branco e fritas",
          quantidade: 0,
        },
        {
          nome: "Frango à Parmegiana Para 2 Pessoas",
          preco: 52.0,
          descricao: "Acompanha arroz branco e fritas",
          quantidade: 0,
        },
        {
          nome: "Filé à Parmegiana Individual",
          preco: 34.0,
          descricao: "Acompanha arroz branco e fritas",
          quantidade: 0,
        },
        {
          nome: "Filé à Parmegiana Para 2 Pessoas",
          preco: 62.0,
          descricao: "Acompanha arroz branco e fritas",
          quantidade: 0,
        },
        {
          nome: "Camarão Internacional Individual",
          preco: 30.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Camarão Internacional Para 2 Pessoas",
          preco: 59.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Maminha da Casa Individual",
          preco: 30.0,
          descricao:
            "Acompanha arroz branco, farofa de ovo com banana e fritas",
          quantidade: 0,
        },
        {
          nome: "Maminha da Casa Para 2 Pessoas",
          preco: 58.0,
          descricao:
            "Acompanha arroz branco, farofa de ovo com banana e fritas",
          quantidade: 0,
        },
        {
          nome: "Picanha Parrileiro Individual",
          preco: 49.0,
          descricao: "Acompanha arroz de alho e fritas da casa",
          quantidade: 0,
        },
        {
          nome: "Picanha Parrileiro Para 2 Pessoas",
          preco: 99.0,
          descricao: "Acompanha arroz de alho e fritas da casa",
          quantidade: 0,
        },
        {
          nome: "Spaghetti Com Tiras de Filé Ao Molho Madeira Individual",
          preco: 29.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Spaghetti Com Tiras de Filé Ao Molho Madeira Para 2 Pessoas",
          preco: 60.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Risoto de File Com Queijo Coalho Individual",
          preco: 30.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Risoto de File Com Queijo Coalho Para 2 Pessoas",
          preco: 60.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Risoto de Camarão Individual",
          preco: 33.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Risoto de Camarão Para 2 Pessoas",
          preco: 66.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Filé Cheese Individual",
          preco: 42.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Filé Cheese Para 2 Pessoas",
          preco: 84.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Spaghetti Com Camarão Ao Molho 4 Queijos Individual",
          preco: 30.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Spaghetti Com Camarão Ao Molho 4 Queijos Para 2 Pessoas",
          preco: 58.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Peixe A Delícia Individual",
          preco: 34.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Peixe A Delícia Para 2 Pessoas",
          preco: 66.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Carne de Sol Individual",
          preco: 32.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Carne de Sol Para 2 Pessoas",
          preco: 62.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Troca de Guarnição Individual",
          preco: 4.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Troca de Guarnição Para 2 Pessoas",
          preco: 8.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Picanha Com Spaghetti Ao Molho 4 Queijos Individual",
          preco: 52.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Picanha Com Spaghetti Ao Molho 4 Queijos Para 2 Pessoas",
          preco: 99.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Tilápia Crocante, Servida Com Risoto de Limão Siciliano Individual",
          preco: 42.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Tilápia Crocante, Servida Com Risoto de Limão Siciliano Para 2 Pessoas",
          preco: 84.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Picanha Biro Biro Individual",
          preco: 52.0,
          descricao: "",
          quantidade: 0,
        },
        {
          nome: "Picanha Biro Biro Para 2 Pessoas",
          preco: 109.0,
          descricao: "",
          quantidade: 0,
        },
      ],
    });

    function salvarPedido() {
      console.log(Burger.value);

      carrinho.burgers.push(Burger.value);

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

    function updateQuantities(selectedItem) {}

    return {
      Burger,
      salvarPedido,
      updateQuantities,
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
        <span id="textDividers">À LA CARTE</span>
        <hr />
      </div>
      <div v-for="(item, index) in Burger.Pao" :key="item">
        <button
          class="botao1"
          @click="item.quantidade++, updateQuantities(item)"
        >
          +
        </button>

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
        <p id="itens">{{ item.descricao }}</p>
        <br />
      </div>

      <!---------------------------->

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
  font-size: 40px;
  font-weight: lighter;
  text-transform: uppercase;
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
