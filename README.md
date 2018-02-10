# Redux in Action

### IMUTABILIDADE
Embora não seja um requisito rigoroso, é altamente encorajado a manter seus dados imutáveis, ou seja, não mutando valores diretamente. A imutabilidade tem benefícios inerentes, como ser fácil de trabalhar e testar, mas no caso do Redux, o benefício real é que ele permite verificações de igualdade extremamente rápidas e simples.

Por exemplo, se você mutar um objeto em um redutor, React-Redux connectpode falhar ao atualizar corretamente seu componente correspondente. Quando connecté comparar estados antigos e novos e decidir se ele precisa prosseguir com um re-render, ele só verificará se dois objetos são iguais, e não que cada propriedade individual seja igual. A imutabilidade também é ótima para lidar com dados históricos e é necessária para recursos avançados de depuração do Redux, como o tempo de viagem.

O longo e curto disso é nunca mutar dados no lugar com o Redux. Seus redutores devem sempre aceitar o estado atual como entrada e calcular um estado totalmente novo. O JavaScript não oferece estruturas de dados imutáveis ​​fora da caixa, mas existem várias bibliotecas excelentes. ImmutableJS e Updeep são dois exemplos populares e, além de impor a imutabilidade, eles também fornecem APIs mais avançadas para atualizar objetos profundamente aninhados. Se você quer algo mais leve, sem interrupções, você oferece estruturas de dados imutáveis, mas permite que você continue usando API JavaScript padrão.

