const dadosTelemetriaCSV = {
  origem: "Log Real OBD-II (ELM327)",
  arquivo: "2026-11-09 10-40-15.csv",
  duracao_min: "9,75",
  distancia_km: "1,01",
  combustivel_usado_l: "0,30",
  rendimento_km_l: "3,33",
  marcha_lenta_pct: "63,8",
  velocidade_media_kmh: "6,1",
  velocidade_max_kmh: "49",
  consumo_parado_lh_mediana: "1,46",
  rpm_medio: "1.295",
  temp_arrefecimento_c: "89,8",
  combustivel_tipo: "Etanol 100%"
};

function carregarTelemetriaNaTela(dados) {
  Object.entries(dados).forEach(([chave, valor]) => {
    const elementos = document.querySelectorAll(`[data-obd="${chave}"]`);
    elementos.forEach(el => {
      el.textContent = valor;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  carregarTelemetriaNaTela(dadosTelemetriaCSV);
});