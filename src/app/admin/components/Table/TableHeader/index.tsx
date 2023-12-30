export default function TableHeader() {
  const headers = [ "id" ,"Nome", "Descriçao", "Produtos"];

  return (
    <tr>
      {headers.map((item, index) =>
        <th key={index}>
          {item}
        </th>
      )}
    </tr>
  );
}
