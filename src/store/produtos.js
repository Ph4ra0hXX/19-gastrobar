import { defineStore } from "pinia";

export const carrinhoStore = defineStore("carrinho", {
  state: () => {
    return {
      burgers: [],
      macarronadas: [],
      batatas: [],
      combos: [],
      bebidas: [],
      sobremesas: [],
      dadosPessoais: {
        nome: "",
        rua: "",
        bairro: "",
        numero: "",
        referencia: "",
        formaDeEntrega: "",
        formaDePagamento: "",
        troco: "",
      },
      pedidos: [],
      valorTotal: 0,
      quantidadeDeItens: 0,
      observacao: "",
    };
  },
  getters: {
    getValorTotal() {
      let total = 0;

      var pedidos = [
        ...this.burgers,
        ...this.macarronadas,
        ...this.batatas,
        ...this.combos,
        ...this.sobremesas,
        ...this.bebidas,
      ];

      pedidos.forEach((categoria) => {
        for (const chave in categoria) {
          categoria[chave].forEach((item) => {
            total += item.preco * item.quantidade;
          });
        }
      });

      return total.toFixed(2);
    },
    getTotalPedidos() {
      return (
        this.burgers.length +
        this.macarronadas.length +
        this.batatas.length +
        this.combos.length +
        this.sobremesas.length +
        this.bebidas.length
      );
    },
  },
});

export const produtosStore = defineStore("produto", {
  state: () => {
    return {
      cardDataStore: [
        {
          id: 1,
          nome: "ENTRADAS",
          img: "food22.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/entradas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 8,
          nome: "À LA CARTE",
          img: "food33.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/carte",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        /* {
          id: 2,
          nome: "PRATOS ESPECIAIS",
          img: "food12.webp",
          descricao: "Verificar disponibilidade",
          url: "/macarronada",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },*/
        {
          id: 9,
          nome: "ESPETINHOS",
          img: "food16.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/espetinhos",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 6,
          nome: "GUARNIÇÕES",
          img: "food15.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/guarnicoes",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 7,
          nome: "SOBREMESAS",
          img: "food33.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/sobremesas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },

        {
          id: 4,
          nome: "BEBIDAS",
          img: "food4.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/bebidas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
      ],
    };
  },
});

export const produtosStore2 = defineStore("produto2", {
  state: () => {
    return {
      cardDataStore: [
        {
          id: 1,
          nome: "ENTRADAS",
          img: "food22.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/entradas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 8,
          nome: "À LA CARTE",
          img: "food33.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/carte",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        /* {
          id: 2,
          nome: "PRATOS ESPECIAIS",
          img: "food12.webp",
          descricao: "Verificar disponibilidade",
          url: "/macarronada",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },*/
        {
          id: 9,
          nome: "ESPETINHOS",
          img: "food16.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/espetinhos",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 6,
          nome: "GUARNIÇÕES",
          img: "food15.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/guarnicoes",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
        {
          id: 7,
          nome: "SOBREMESAS",
          img: "food33.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/sobremesas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },

        {
          id: 4,
          nome: "BEBIDAS",
          img: "food4.webp",
          descricao: "✗✗✗✗✗✗✗✗✗✗",
          url: "/bebidas",
          diasSemana: [
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado",
            "domingo",
          ],
        },
      ],
    };
  },
});
