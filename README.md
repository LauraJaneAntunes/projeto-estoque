# Sistema de Estoque

Sistema de gerenciamento de estoque desenvolvido com Next.js, TypeScript e NodeJS com Express.

## 🚀 Funcionalidades

- ✅ Autenticação de usuários
- 📦 Gerenciamento de produtos
- 📊 Controle de estoque
- 🔒 Sistema seguro com criptografia de senhas e validação de dados
- Upload de imagens de produtos
- 🎨 Interface moderna e responsiva

## 🛠️ Tecnologias

**Frontend:** Next.js, TypeScript, React, Tailwind CSS, Lucide React, @hookform/resolvers, @radix-ui/react-
**Backend:** Node.js, Express, TypeScript, Sequelize, MySQL, bcrypt, cors, jsonwebtoken, multer, zod



## 📋 Pré-requisitos

- Node.js 16.8 ou superior
- MySQL instalado e configurado

## 🚀 Instalação e Configuração

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd sistema-estoque
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` na raiz do projeto
   - Adicione suas credenciais:
```env
DB_HOST=seu_host_mysql
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=seu_banco_de_dados
```

4. Execute o projeto:
```bash
npm run dev
```

## 🗄️ Estrutura do Banco de Dados

### Tabela `users`
- `id` - UUID (Primary Key)
- `name` - Nome do usuário
- `email` - Email único do usuário
- `created_at` - Data de criação

### Tabela `products`
- `id` - UUID (Primary Key)
- `name` - Nome do produto
- `description` - Descrição do produto
- `price` - Preço do produto
- `quantity` - Quantidade em estoque
- `image` - URL da imagem do produto
- `created_at` - Data de criação
- `updated_at` - Data de atualização
- `user_id` - UUID do usuário (Foreign Key)

## 🔐 Segurança

O sistema utiliza:
- Utiliza bcrypt para criptografar as senhas dos usuários.
- Emprega zod para validar os dados de entrada, evitando injeção de código e outros ataques.
- Implementa um sistema de autenticação com JWT.

## 📱 Páginas

- `/` - Página inicial
- `/login` - Login de usuários
- `/register` - Cadastro de usuários
- `/dashboard` - Painel principal
- `/products` - Gerenciamento de produtos

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- Laura Jane Antunes - [@laurajaneantunes](https://github.com/LauraJaneAntunes)

## 🙏 Links Úteis

- [Next.js 13](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI
- [Lucide React](https://lucide.dev/) - Ícones