import styles from "./styles.module.scss";

export default function Header() {
  return (
    <main className={styles.maincontato}>
      <form>
        <label>Nome e Sobrenome</label>
        <input
          type="text"
          id="nomesobrenome"
          className={styles.inputpadrao}
          required
        />

        <label>Email</label>
        <input
          type="email"
          id="email"
          className={styles.inputpadrao}
          required
          placeholder="seuemail@dominio"
        />

        <label>Telefone</label>
        <input
          type="tel"
          id="telefone"
          className={styles.inputpadrao}
          required
          placeholder="(xx) xxxxx-xxxx"
        />

        <label>Mensagem</label>
        <textarea cols={70} rows={10} id="mensagem" className={styles.inputpadrao} required />

        <legend>Como prefere nosso contato?</legend>
        <label>
          <input type="radio" name="contato" value="email" id="radio-email" />
          Email
        </label>

        <label>
          <input
            type="radio"
            name="contato"
            value="telefone"
            id="radio-telefone"
          />
          Telefone
        </label>

        <label>
          <input
            type="radio"
            name="contato"
            value="whatsapp"
            id="radio-whatsapp"
            checked
          />
          Whatsapp
        </label>

        <legend>Qual horário prefere ser atendido?</legend>
        <select>
          <option>Manhã</option>
          <option>Tarde</option>
          <option>Noite</option>
        </select>

        <label className={styles.checkbox}>
          <input type="checkbox" />
          Gostaria de receber nossas novidades?
        </label>

        <input
          type="submit"
          value="Enviar Formulário"
          className={styles.enviar}
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Seg a Sex</td>
            <td>08 às 18</td>
          </tr>
          <tr>
            <td>Sábado</td>
            <td>08 às 13</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

/*
<main class="main-contato">
            <form>
                <label for="nomesobrenome">Nome e Sobrenome</label>
                <input type="text" id="nomesobrenome" class="input-padrao" required>

                <label for="email">Email</label>
                <input type="email" id="email"class="input-padrao" required placeholder="seuemail@dominio"> 

                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone"class="input-padrao" required placeholder="(xx) xxxxx-xxxx"> 
                
                <label for="mensagem">Mensagem</label>
                <textarea cols="70" rows="10" id="mensagem" class="input-padrao" required></textarea>
                <fieldset>
                    <legend>Como prefere nosso contato?</legend>
                    <label for="radio-email"><input type="radio" name="contato" value=
                    "email" id="radio-email">Email</label>
                     
                    <label for="radio-telefone"><input type="radio" name="contato" value=
                    "telefone" id="radio-telefone">Telefone</label>
                     

                    <label for="radio-whatsapp"><input type="radio" name="contato" value=
                    "whatsapp" id="radio-whatsapp" checked>Whatsapp</label>
                     
                </fieldset>
                <fieldset>   
                    <legend>Qual horário prefere ser atendido?</legend>
                    <select>
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Noite</option>
                    </select>
                </fieldset>

                <label class="checkbox"><input type="checkbox" checked>Gostaria de receber nossas novidades?</label>

                <input type="submit" value="Enviar Formulário" class="enviar">
            </form>
            <table>
                <thead>
                    <tr>
                       <th>Dia</th>
                       <th>Horário</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Seg a Sex</td>
                        <td>08 às 18</td>
                    </tr>
                    <tr>
                        <td>Sábado</td>
                        <td>08 às 13</td>
                    </tr>
                </tbody>
            </table>
        </main>
        */
