const initialMarkdown = `# Título de Nível 1 (Heading 1)
## Título de Nível 2 (Heading 2)
### Título de Nível 3 (Heading 3)
#### Título de Nível 4 (Heading 4)
##### Título de Nível 5 (Heading 5)

Texto normal com um exemplo de **negrito**, *itálico* e \`código em linha\`.

---

### Lista de Tarefas (Checklist)
- [x] Criar a interface HTML
- [x] Implementar o CSS
- [ ] Adicionar funcionalidade de cópia
- [ ] Melhorar os estilos do snackbar

---

### Lista Ordenada
1. Passo 1: Planejar o projeto
2. Passo 2: Escrever o código
3. Passo 3: Testar e corrigir bugs

---

### Lista Não Ordenada
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

---

### Bloco de Código (Code Block)

\`\`\`javascript
function helloWorld() {
    console.log('Hello, world!');
}
\`\`\`

---

### Citação (Blockquote)

> Este é um exemplo de citação. 
> Markdown é ótimo para documentação e notas rápidas!

---

### Tabela

| Coluna 1       | Coluna 2        | Coluna 3       |
|-----------------|-----------------|----------------|
| Valor 1        | Valor 2         | Valor 3        |
| Valor A        | Valor B         | Valor C        |
| Valor ♦        | Valor ■        | Valor ▲        |

---

### Link e Imagem

[Link para o Google](https://www.google.com)

![Imagem de exemplo](https://picsum.photos/300/100)

---

### Linha Horizontal

---`;

const editorContainer = document.getElementById('editor');
const editor = CodeMirror(editorContainer, {
  mode: 'markdown',
  lineNumbers: true,
  theme: 'material',
  value: initialMarkdown,
  viewportMargin: Infinity,
  lineWrapping: true
});