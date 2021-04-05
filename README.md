![Logo Allied](./src/images/logo.png)

# Vaga: Front-End

Muito bom você ter chegado até aqui! :)

Através desse teste poderemos analisar o seu estilo de codificação, bibliotecas preferidas, raciocínio lógico, entre outros detalhes que poderão fazer a diferença na hora da sua entrevista.

Lembrando que esse teste é obrigatório. Mande o seu resultado num repositório criado por você mesmo e depois nos mande o link. Não mande arquivos zipado e nem links de Google Drive e afins. Só aceitaremos testes feitos aqui no Github ;)

Ah, mais um detalhe importante: essa vaga é presencial, e nosso escritório fica localizado aqui na Barra da Tijuca, Rio de Janeiro/RJ. Por enquanto, não temos previsão de trabalho remoto.

---

## O que devo fazer agora?

* Implemente sua solução para a proposta do teste.
* Documente todos os passos necessários para executá-la (Um Readme como esse)
* Envie por e-mail para raquel.silva@wooza.com.br junto com o seu currículo e link do seu perfil no Linkedin.

---

## Ok, mas como é esse teste?

Aqui na Allied trabalhamos com aplicações completas em JavaScript no geral e alguns de seus `frameworks`. Nossos projetos são feitos geralmente em Angular e React, junto com o Gatsby ou Next. Mas caso queira usar Vue, por exemplo, não tem problema ;) Nós usamos em alguns projetos aqui também ;)

Usamos API's internas para interagir com nossos projetos durante o fluxo de navegação do usuário, nada de MVC por aqui. Por isso, queremos conhecer um pouco da sua experiência com JavaScript e alguns desses frameworks. Alguns projetos legados são feitos em AngularJS, portanto, caso queira fazer nesse, sem problemas, mas daremos mais ênfase às outras tecnologias.

A sua aplicação deverá listar as plataformas da seguinte API:
```
http://private-59658d-celulardireto2017.apiary-mock.com/plataformas
```
Com essa listagem, você deverá possibilitar ao usuário navegar pelos respectivos planos (vinculados pelo sku) de cada plataforma. Abaixo segue as URL's da API de planos:

```
http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01 (tablet)
http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02 (computador)
http://private-59658d-celulardireto2017.apiary-mock.com/planos/WF03 (wi-fi)
```

Sempre separamos essas etapas em rotas diferentes, portanto, cuide dessa parte também. A última tela deverá ser um formulário simples, e com os seguintes campos: Nome, E-mail, Nascimento, CPF e Telefone.

No botão de submit do formulário, basta printar as informações no console do navegador (inclusive os dados do plano selecionado nas etapas anteriores).

Em resumo, essas são as etapas da aplicação:

* Selecionar plataforma
* Selecionar plano
* Preencher dados pessoais

A parte visual fica ao seu critério, faça como achar melhor. Não esqueça de criar um Readme na raiz do projeto nos orientando sobre como rodar sua aplicação, ok? Lembrando que quanto menos comandos precisarmos para isso, melhor! ;)

---

## O que iremos analisar

* Boa arquitetura, organização e padronização de código (lint/prettier, editorconfig, csscomb)
* Automatização de tarefas (Webpack e afins)
* Código em ES6+, por favor ;) (a não ser que seja Typescript com, ou sem, Angular)
* Reutilização e Componentização
* Organização dos estilos (Aqui nós utilizamos Styled Components para React e o ITCSS para o restante)
* Noções de UI/UX
* Testes serão um excelente **diferencial**

---

**Bom teste! ;)**
