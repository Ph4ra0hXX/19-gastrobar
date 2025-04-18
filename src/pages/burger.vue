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
          nome: "Isca de Frango",
          preco: 27.0,
          quantidade: 0,
          descricao: "Frango empanado frito.",
        },
        {
          nome: "Mini Pastéis de Carne",
          preco: 24.0,
          quantidade: 0,
          descricao: "Acompanha molho rosé.",
        },
        {
          nome: "Mini Pastéis de Queijo",
          preco: 22.0,
          quantidade: 0,
          descricao: "Acompanha geleia de pimenta.",
        },
        {
          nome: "Batata Frita c/ Rosé",
          preco: 15.0,
          quantidade: 0,
          descricao: "Batata frita tradicional com molho rosé.",
        },
        {
          nome: "Croquete de Costela",
          preco: 32.0,
          quantidade: 0,
          descricao: "Croquetes crocantes recheados com costela desfiada.",
        },
        {
          nome: "Dadinho de Queijo",
          preco: 20.0,
          quantidade: 0,
          descricao: "Cubos de queijo empanados e fritos.",
        },
        {
          nome: "Linguiça Cuiabana",
          preco: 27.0,
          quantidade: 0,
          descricao: "Linguiça artesanal suína com recheio cuiabano.",
        },
        {
          nome: "Linguiça Picante",
          preco: 27.0,
          quantidade: 0,
          descricao: "Linguiça artesanal levemente apimentada.",
        },
        {
          nome: "Linguiça Sertaneja",
          preco: 27.0,
          quantidade: 0,
          descricao: "Linguiça artesanal com temperos sertanejos.",
        },
        {
          nome: "Feijão Verde Cremoso",
          preco: 24.9,
          quantidade: 0,
          descricao: "Feijão verde refogado com creme e temperos especiais.",
        },
        {
          nome: "Pão de Alho",
          preco: 7.0,
          quantidade: 0,
          descricao: "Tradicional pão de alho assado na brasa.",
        },
        {
          nome: "Batata Frita Especial",
          preco: 22.0,
          quantidade: 0,
          descricao: "Com bacon, cheddar e queijo.",
        },
        {
          nome: "Isca de Tilápia",
          preco: 32.0,
          quantidade: 0,
          descricao: "Empanada, acompanha molho 3 queijos.",
        },
        {
          nome: "Salada Caesar",
          preco: 28.0,
          quantidade: 0,
          descricao:
            "Folhas, frango grelhado, parmesão, manga, croutons e molho especial.",
        },
        {
          nome: "Salada de Filé",
          preco: 30.0,
          quantidade: 0,
          descricao:
            "Folhas, filé grelhado, parmesão, manga, croutons e molho especial.",
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
        <span id="textDividers">ENTRADAS</span>
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
  font-family: Barlow-Black;
  font-size: 25px;
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
