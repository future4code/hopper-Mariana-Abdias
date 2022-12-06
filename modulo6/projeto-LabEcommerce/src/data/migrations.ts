import connection from './connection'

const criarTabelaLabecommerceUsers = async () => {
  try {
    await connection.raw(`
         CREATE TABLE labecommerce_users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
         );
       `)

    console.log('Tabela labecommerce_users criada com sucesso.')
  } catch (error) {
    console.log(error, 'Erro ao criar Tabela labecommerce_users.')
  }
}

async function popularTabelaLabecommerceUsers() {
  try {
    await connection.raw(`
         INSERT INTO labecommerce_users (id, name, email, password)
         VALUES 
         ("001", "Soter", "soter@gmail.com", "123"),
         ("002", "João", "joao@gmail.com", "234"),
         ("003", "Paula", "paula@gmail.com", "345"),
         ("004", "Amanda", "amanda@gmail.com", "456"),
         ("005", "Darvas", "darvas@gmail.com", "678"),
         ("006", "Severo", "severo@gmail.com", "910"),
         ("007", "Caio", "caio@gmail.com", "111"),
         ("008", "Chijo", "chijo@gmail.com", "222"),
         ("009", "Lais", "lais@gmail.com", "333"),
         ("010", "Bruno", "bruno@gmail.com", "444"),
         ("011", "Luciano", "luciano@gmail.com", "555"),
         ("012", "Miau", "miau@gmail.com", "666"),
         ("013", "Sekine", "sekine@gmail.com", "777"),
         ("014", "Nathalia", "nathalia@gmail.com", "888"),
         ("015", "Amanda", "amandaop@gmail.com", "999"),
         ("016", "Rebeca", "rebeca@gmail.com", "101"),
         ("017", "Jean", "jean@gmail.com", "102"),
         ("018", "Vitória", "vitoria@gmail.com", "103"),
         ("019", "Fernanda", "fernanda@gmail.com", "104"),
         ("020", "Tainah", "tainah@gmail.com", "105"),
         ("021", "Aline", "aline@gmail.com", "106"),
         ("022", "Nathalia", "nathaliacx@gmail.com", "107"),
         ("023", "Layla", "layla@gmail.com", "108"),
         ("024", "Jonathan", "jonathan@gmail.com", "109"),
         ("025", "Maju", "maju@gmail.com", "110");
       `)

    console.log('Tabela labecommerce_users populada com sucesso.')
  } catch (error) {
    console.log(error, 'Erro ao popular Tabela labecommerce_users.')
  }
}

criarTabelaLabecommerceUsers()
  .then(() => popularTabelaLabecommerceUsers())
  .finally(() => process.exit())


  const criarTabelaLabecommerceProducts = async () => {
  try {
    await connection.raw(`
         CREATE TABLE labecommerce_products(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            image_url VARCHAR(255) NOT NULL
         );
       `)

    console.log('Tabela labecommerce_products criada com sucesso.')
  } catch (error) {
    console.log(error, 'Erro ao criar Tabela labecommerce_products.')
  }
}

async function popularTabelaLabecommerceProducts() {
  try {
    await connection.raw(`
         INSERT INTO labecommerce_products (id, name, price, image_url)
         VALUES 
         ("001", "melão", 5, "https://1.bp.blogspot.com/-ewZ4lFkmRnY/XzfYBUU4YrI/AAAAAAABRtw/rXX64cNO55ISGzekc-tLakkoY3KaNsXIgCLcBGAsYHQ/s1600/melao.png"),
         ("002", "melancia", 3, "http://pluspng.com/img-png/watermelon-hd-png-watermelon-png-image-1400.png"),
         ("003", "morango", 10, "http://4.bp.blogspot.com/-mlXGuXUfOBw/T-MLzketrNI/AAAAAAAAPuA/JdibomJm_Og/s1600/morangos+png+(61).png"),
         ("004", "banana", 6, "https://purepng.com/public/uploads/large/purepng.com-bananafruitsyellowfruit-981524754330lspp8.png"),
         ("005", "manga", 3, "https://agrochinita.cl/wp-content/uploads/2020/04/mango.png"),
         ("006", "laranja", 6, "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/05/Gomo-de-Laranja-PNG.png"),
         ("007", "uva", 8, "http://pluspng.com/img-png/uvas-png-polpa-de-uva-800.png"),
         ("008", "pêssego", 14, "https://imagensemoldes.com.br/wp-content/uploads/2018/09/Imagem-de-Frutas-P%C3%AAssego-10-PNG.png"),
         ("009", "abacaxi", 9, "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/05/Figura-Abacaxi-PNG.png"),
         ("010", "ameixa", 5, "https://2.bp.blogspot.com/-d7LX2lVlgcI/VaFOM_fj2wI/AAAAAAAAADI/6ljyuLEnOho/s1600/plum%2B01.png")
       `)

    console.log('Tabela labecommerce_products populada com sucesso.')
  } catch (error) {
    console.log(error, 'Erro ao popular Tabela labecommerce_users.')
  }
}

criarTabelaLabecommerceProducts()
  .then(() => popularTabelaLabecommerceProducts())
  .finally(() => process.exit())


  const criarTabelaLabecommercePurchases = async () => {
    try {
      await connection.raw(`
           CREATE TABLE labecommerce_purchases(
              id VARCHAR(255) PRIMARY KEY,
              user_id VARCHAR(255),
              product_id VARCHAR(255),
              quantity INT NOT NULL,
              total_price INT NOT NULL,
              FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
              FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
           );
         `)
  
      console.log('Tabela labecommerce_purchases criada com sucesso.')
    } catch (error) {
      console.log(error, 'Erro ao criar Tabela labecommerce_purchases.')
    }
  }
  
  async function popularTabelaLabecommercePurchases() {
    try {
      await connection.raw(`
           INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
           VALUES 
           ("001", "001", "001", 2, 10),
           ("002", "001", "002", 4, 12),
           ("003", "002", "001", 7, 35),
           ("004", "002", "002", 3, 9),
           ("005", "003", "003", 8, 80),
           ("006", "003", "004", 9, 54),
           ("007", "004", "003", 2, 20),
           ("008", "004", "005", 4, 12),
           ("009", "005", "004", 8, 48),
           ("010", "005", "005", 4, 12)
         `)
  
      console.log('Tabela labecommerce_purchases populada com sucesso.')
    } catch (error) {
      console.log(error, 'Erro ao popular Tabela labecommerce_purchases.')
    }
  }
  
  criarTabelaLabecommercePurchases()
    .then(() => popularTabelaLabecommercePurchases())
    .finally(() => process.exit())
  
  
