import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Lorem ipsum dolor sit.
            </td>
            <td className="withdraw">
              - $100,00
            </td>
            <td>
              Lorem ipsum.
            </td>
            <td>
              10/08/21
            </td>
          </tr>

          <tr>
            <td>
              Lorem ipsum dolor sit.
            </td>
            <td className="deposit">
             + $1000,00
            </td>
            <td>
              Lorem ipsum.
            </td>
            <td>
              10/08/21
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}