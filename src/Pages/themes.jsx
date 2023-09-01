import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import Colab_clg from "./Header/colab_clg";

import "../Static/css/themes.css";

export default function Themes() {
  return (
    <div>
      <Container>
        <div className="page-title">
          <h1>Conference Themes</h1>
          <h3></h3>
        </div>
      </Container>

      {/* <Colab_clg /> */}

      <div className="theme-outer">
        <Container>
          <div className="theme-inner">
            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>1</p>
                </div>
              </div>
              <div className="theme-details">
                <h3> Advancements in Membrane Technologies (TS-AMT)</h3>
                <p>
                  Bio polyester Membrane; Anti-fouling Membranes; Membrane-based
                  Water Quality Monitoring
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>2</p>
                </div>
              </div>
              <div className="theme-details">
                <h3> Carbon Footprint Reduction (TS-CFP)</h3>
                <p>
                  Water Footprint Assessment; Net Zero Carbon; Embodied Carbon
                  of Water Usage
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>3</p>
                </div>
              </div>
              <div className="theme-details">
                <h3> Circular Economy (TS-CEC)</h3>
                <p>Water Sustainability; Closed Loop; Life Cycle Assessment</p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>4</p>
                </div>
              </div>
              <div className="theme-details">
                <h3> Ecological Sanitation (TS-ESA)</h3>
                <p>
                  Faecal Sludge Management; Water Minimization in Closets; Dry
                  Sanitation System
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>5</p>
                </div>
              </div>
              <div className="theme-details">
                <h3> Emerging Contaminants in Water and Wastewater (TS-ECW)</h3>
                <p>
                  Nanoremediation; Metal Phytotoxicity; Bioaccumulation of Heavy
                  Metals
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>6</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>GIS and Remote Sensing in Water Monitoring (TS-GIS)</h3>
                <p>
                  Water Quality Forecast; Spatial Distribution of Groundwater;
                  Drought Risk Assessment
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>7</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>
                  Green Technologies for Crude Oil Processed Water Treatment
                  (TS-GTC)
                </h3>
                <p>Green Petroleum; Cleaner Production; Bio-Flocculation</p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>8</p>
                </div>
              </div>
              <div className="theme-details">
                <h3> Hydroponics and Smart Farming (TS-HSF)</h3>
                <p>
                  Smart Greenhouses; Precision Farming; Integrated Farming
                  System
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>9</p>
                </div>
              </div>
              <div className="theme-details">
                <h3> Impact of Covid-19 on Wastewater Management (TS-ICO)</h3>
                <p>
                  Covid 19 Wastewater Surveillance; Transmission of Pathogens;
                  Biomedical Contamination
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>10</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>
                  Incorporation of IoT, AI and ML in Water Technologies (TS-IOT)
                </h3>
                <p>
                  Smart Water Resource Management; Predictive Safety Assessment;
                  Integrated System
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>11</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Landless Farming (TS-LLF)</h3>
                <p>
                  Organic Farming; Ruminant Production; Sustenance of Dryland
                  Farmers
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>12</p>
                </div>
              </div>
              <div className="theme-details">
                <h3> Novel Desalination Technologies (TS-NDT)</h3>
                <p>
                  Reverse Osmosis; Multi-effect Distillation; Hydrate based
                  Desalination
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>13</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Phytoremediation (TS-PHY)</h3>
                <p>
                  Phytostabilization; Metal Hyperaccumulation Technology;
                  Transgenic Plants
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>14</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Process Water Treatment Technology (TS-PWT)</h3>
                <p>
                  Photocatalysis; Water Pinch Analysis; Catalytic Ozonisation
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>15</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Produced Water Treatment (TS-PDT)</h3>
                <p>
                  Offshore Produced Water Treatment; Bio-based Produced Water
                  Treatment; Micellar-enhanced Ultrafiltration
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>16</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Recovery and Remediation of Marine oil-spills (TS-RAR)</h3>
                <p>
                  Bio-dispersant and Bio-remediation Technology; Biosurfactants
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>17</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Resource Recovery (TS-RRE)</h3>
                <p>
                  Nutrient Removal and Recovery; Waste-to-Value; Resource
                  Utilization
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>18</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>
                  Socio-Economic issues concerning Wastewater Management(TS-SEI)
                </h3>
                <p>
                  Water Positivity; Valuation of Recycled Water; Sustainable
                  Water Resource Planning
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>19</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>
                  Sustainable Initiatives to achieve Zero Liquid Discharge
                  (TS-ZLD)
                </h3>
                <p>
                  Circularity; Sustainable Industrial Effluent Treatment; Water
                  Conservation
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>20</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Water-Energy-Land-Food Nexus (TS-WEL)</h3>
                <p>
                  Sustainable Agricultural Water Management; Biofuel Assessment;
                  Integrated Watershed Management
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>21</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Water Governance (TS-WGO)</h3>
                <p>Water Economics; Water Administration; Water Policy</p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>22</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Water Reclamation from Industrial Effluents (TS-WRE)</h3>
                <p>
                  Integrated Process Design; Chemical Recovery and Reuse;
                  Disinfection Technology
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>23</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Water Sanitation and Hygiene (TS-WSH)</h3>
                <p>
                  Water Quality Sanitation Intervention; Infection Prevention
                  and Control; Clean Water and Sanitation{" "}
                </p>
              </div>
            </div>

            <div className="theme-item">
              <div className="theme-no">
                <div className="theme-no-box">
                  <p>24</p>
                </div>
              </div>
              <div className="theme-details">
                <h3>Water Sensitive Urban Design (TS-WSD)</h3>
                <p>
                  Smart Cities; Integrated Water Cycle Management; Sustainable
                  Drainage System{" "}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
