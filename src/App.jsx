import React, { useState } from "react";
import { 
  Building2, 
  Globe, 
  Globe2, 
  Flame, 
  Users, 
  MapPin, 
  Gauge, 
  Sparkles, 
  FileSpreadsheet, 
  TrendingUp
} from "lucide-react";
import { PAN_INDIA_BUSINESSES, ALL_INDIAN_STATES, DELHI_LOCALITIES } from "./data/panIndiaBusinesses";
import { deduplicateLeads } from "./utils/discoveryEngine";
import { Header } from "./components/Header";
import { OverviewTab } from "./components/OverviewTab";
import { AllBusinessesTab } from "./components/AllBusinessesTab";
import { NoWebsiteTab } from "./components/NoWebsiteTab";
import { HasWebsiteTab } from "./components/HasWebsiteTab";
import { HighPriorityTab } from "./components/HighPriorityTab";
import { CompetitorTab } from "./components/CompetitorTab";
import { LocalityTab } from "./components/LocalityTab";
import { WebsiteAuditTab } from "./components/WebsiteAuditTab";
import { PitchGeneratorTab } from "./components/PitchGeneratorTab";
import { ExportTab } from "./components/ExportTab";
import { BusinessDetailModal } from "./components/BusinessDetailModal";
import { FloatingAIChatbot } from "./components/FloatingAIChatbot";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [businesses, setBusinesses] = useState(PAN_INDIA_BUSINESSES);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [modalInitialTab, setModalInitialTab] = useState("summary");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [selectedLocalityFilter, setSelectedLocalityFilter] = useState("All India");

  const totalLeads = businesses.length;
  const noWebsiteCount = businesses.filter(
    (b) => b.websiteStatus === "No" || b.websiteStatus === "Unverified"
  ).length;
  const highPriorityCount = businesses.filter((b) => b.opportunityScore >= 80).length;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAddDiscoveredBusinesses = (newLeads) => {
    setBusinesses((prev) => deduplicateLeads([...prev, ...newLeads]));
  };

  const handleSelectBusiness = (business, action = "summary") => {
    setSelectedBusiness(business);
    if (action === "audit") {
      setActiveTab("website-audit");
    } else if (action === "competitor") {
      setActiveTab("competitor-analysis");
    } else if (action === "pitch") {
      setActiveTab("pitch-generator");
    } else {
      setModalInitialTab(action);
      setIsModalOpen(true);
    }
  };

  const handleLocalityFilterChange = (localityOrState) => {
    setSelectedLocalityFilter(localityOrState);
    setActiveTab("all-businesses");
  };

  const navTabs = [
    { id: "overview", label: "1. Overview", icon: TrendingUp },
    { id: "all-businesses", label: "2. All Businesses", icon: Building2, count: totalLeads },
    { id: "no-website", label: "3. No Website", icon: Globe2, count: noWebsiteCount, isHot: true },
    { id: "has-website", label: "4. With Website", icon: Globe },
    { id: "high-priority", label: "5. High-Priority Leads", icon: Flame, count: highPriorityCount, isHot: true },
    { id: "competitor-analysis", label: "6. Competitor Analysis", icon: Users },
    { id: "locality-analysis", label: "7. Locality Analysis", icon: MapPin },
    { id: "website-audit", label: "8. Website Audit", icon: Gauge },
    { id: "pitch-generator", label: "9. Sales Pitch Generator", icon: Sparkles },
    { id: "export-reports", label: "10. Export Reports", icon: FileSpreadsheet },
  ];

  return (
    <div className="app-container">
      {/* Header & Configuration Ribbon */}
      <Header 
        totalCount={totalLeads}
        noWebsiteCount={noWebsiteCount}
        highPriorityCount={highPriorityCount}
        activeStateFilter={selectedLocalityFilter}
      />

      {/* 10 Navigation Tabs Bar */}
      <nav className="tabs-nav-bar">
        <div className="tabs-nav-inner">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-tab-btn ${isActive ? "active" : ""}`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`tab-badge ${tab.isHot ? "badge-hot" : ""}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Tab Content Display */}
      <main className="main-content">
        {activeTab === "overview" && (
          <OverviewTab 
            businesses={businesses}
            onSelectBusiness={handleSelectBusiness}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === "all-businesses" && (
          <AllBusinessesTab 
            businesses={businesses}
            onSelectBusiness={handleSelectBusiness}
            localities={DELHI_LOCALITIES}
          />
        )}

        {activeTab === "no-website" && (
          <NoWebsiteTab 
            businesses={businesses}
            onSelectBusiness={handleSelectBusiness}
          />
        )}

        {activeTab === "has-website" && (
          <HasWebsiteTab 
            businesses={businesses}
            onSelectBusiness={handleSelectBusiness}
          />
        )}

        {activeTab === "high-priority" && (
          <HighPriorityTab 
            businesses={businesses}
            onSelectBusiness={handleSelectBusiness}
            onCopyText={showToast}
          />
        )}

        {activeTab === "competitor-analysis" && (
          <CompetitorTab 
            businesses={businesses}
            initialBusiness={selectedBusiness}
            onSelectBusiness={handleSelectBusiness}
          />
        )}

        {activeTab === "locality-analysis" && (
          <LocalityTab 
            businesses={businesses}
            onSelectLocalityFilter={handleLocalityFilterChange}
            onDiscoveryAdd={handleAddDiscoveredBusinesses}
            onShowToast={showToast}
          />
        )}

        {activeTab === "website-audit" && (
          <WebsiteAuditTab 
            businesses={businesses}
            initialBusiness={selectedBusiness}
            onSelectBusiness={handleSelectBusiness}
          />
        )}

        {activeTab === "pitch-generator" && (
          <PitchGeneratorTab 
            businesses={businesses}
            initialBusiness={selectedBusiness}
            onShowToast={showToast}
          />
        )}

        {activeTab === "export-reports" && (
          <ExportTab 
            businesses={businesses}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Business Detail Modal Overlay */}
      {isModalOpen && selectedBusiness && (
        <BusinessDetailModal 
          business={selectedBusiness}
          initialTab={modalInitialTab}
          onClose={() => setIsModalOpen(false)}
          onShowToast={showToast}
        />
      )}

      {/* Floating AI Chatbot Widget */}
      <FloatingAIChatbot 
        businesses={businesses}
        onSelectBusiness={handleSelectBusiness}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
