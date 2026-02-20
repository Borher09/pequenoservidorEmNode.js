Relatório  
Foi elaborada uma estrutura básica para a implementação do projeto. O arquivo 
app.express.js é responsável por estabelecer um servidor Node.js, realizando a 
importação das dependências necessárias para o gerenciamento de variáveis de 
ambiente e para a utilização do framework Express. 
Esse arquivo implementa uma rota GET específica, que responde às requisições 
com uma mensagem padronizada, garantindo a inicialização do serviço e 
possibilitando o monitoramento das conexões ativas por meio do método listen. 
A estrutura do projeto foi organizada com a pasta src, destinada ao código-fonte da 
aplicação, o arquivo .env para a configuração da porta do servidor e o package.json, 
responsável pelo gerenciamento das dependências do projeto. 
O arquivo package.json está configurado com a propriedade "type": "module", o que 
permite a utilização de comandos mais modernos de importação. Além disso, 
contém o script express, utilizado para executar o servidor com atualização 
automática, por meio da ferramenta nodemon. 
No arquivo app.express.js, foi utilizado o Express para realizar a leitura da porta 
definida no ambiente, aplicar um middleware para o processamento de requisições 
no formato JSON e definir a rota GET /hello. 
Como resultado final, o projeto demonstra que o servidor é capaz de processar 
requisições de forma independente, atendendo exatamente aos requisitos 
propostos.
