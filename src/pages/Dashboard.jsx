import "./Dashboard.css";

const maintenanceItems = [
  { id: "OS-1042", area: "Produção", equipment: "Esteira 3", status: "Em andamento", priority: "Alta" },
  { id: "OS-1039", area: "Expedicao", equipment: "Empilhadeira 2", status: "Aguardando peca", priority: "Media" },
  { id: "OS-1034", area: "Utilidades", equipment: "Compressor A", status: "Concluida", priority: "Baixa" },
  { id: "OS-1028", area: "Usinagem", equipment: "Torno CNC 5", status: "Aberta", priority: "Alta" },
];

const statCards = [
  { label: "Ordens abertas", value: 18 },
  { label: "Em execução", value: 7 },
  { label: "Concluídas hoje", value: 11 },
  { label: "SLA crítico", value: "2 h" },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-grid" />
      <header className="dashboard-header">
        <div>
          <p className="dashboard-tag">Painel operacional</p>
          <h1>Dashboard de Manutenção</h1>
          <p className="dashboard-subtitle">
            Acompanhe ordens de serviço, prioridades e indicadores em tempo real.
          </p>
        </div>
        <button type="button" className="new-order-btn">
          Nova solicitação
        </button>
      </header>

      <section className="stats-wrapper">
        {statCards.map((card) => (
          <article className="stat-card" key={card.label}>
            <p>{card.label}</p>
            <strong>{card.value}</strong>
          </article>
        ))}
      </section>

      <section className="content-panel">
        <div className="panel-head">
          <h2>Ordens recentes</h2>
          <span>{maintenanceItems.length} registros</span>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Area</th>
                <th>Equipamento</th>
                <th>Status</th>
                <th>Prioridade</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.area}</td>
                  <td>{item.equipment}</td>
                  <td>
                    <span className={`status-badge status-${item.status.toLowerCase().replace(" ", "-")}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
