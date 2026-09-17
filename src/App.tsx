import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DesktopCredentialPage } from "@/sections/DesktopCredentialPage";
import { MobileCredentialPage } from "@/sections/MobileCredentialPage";
import { IssueModal } from "@/components/IssueModal";
import { IssueTabs } from "@/components/IssueTabs";
import { IssueForm } from "@/components/IssueForm";
import { EmailModal } from "@/components/EmailModal";
import { Header } from "@/sections/Header";
import { TermsOfUsePage } from "@/sections/TermsOfUsePage";
import { PrivacyPolicyPage } from "@/sections/PrivacyPolicyPage";
import { Footer } from "@/sections/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export const App = () => {
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);

  return (
    <Routes>
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route
        path="/"
        element={
          <div className="accent-auto bg-white caret-transparent text-black block text-base not-italic normal-nums font-normal tracking-[normal] leading-[normal] list-outside list-disc outline-[3px] pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-times_new_roman">
            <DesktopCredentialPage
              onOpenIssueModal={() => setIsIssueModalOpen(true)}
            />
            <MobileCredentialPage />
            <IssueModal
              isOpen={isIssueModalOpen}
              onClose={() => setIsIssueModalOpen(false)}
              issueTabs={<IssueTabs />}
              issueForm={<IssueForm />}
            />
            <EmailModal />
          </div>
        }
      />
      <Route
        path="/Terms"
        element={
          <div className="accent-auto bg-white box-border caret-transparent text-black block text-lg not-italic normal-nums font-normal tracking-[normal] leading-[20.7px] list-outside list-disc min-h-full outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-inter_tight">
            <div className="box-border caret-transparent hidden outline-[3px] relative no-underline overflow-hidden"></div>
            <div className="box-border caret-transparent outline-[3px] no-underline"></div>
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <Header />
              <TermsOfUsePage />
              <Footer />
            </div>
            <ChatWidget />
            <div className="box-border caret-transparent h-full outline-[3px] pointer-events-none fixed no-underline w-full z-[9999] left-0 top-0"></div>
            <div className="box-border caret-transparent h-0 outline-[3px] pointer-events-none fixed no-underline w-full z-[9998] left-0 bottom-0"></div>
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[9989] left-0 top-0"></div>
              <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[9989] right-0 top-0"></div>
              <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[9989] left-0 bottom-0"></div>
              <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[9989] right-0 bottom-0"></div>
            </div>
          </div>
        }
      />
      <Route
        path="/Privacy-Policy"
        element={
          <div className="accent-auto bg-white box-border caret-transparent text-black block text-lg not-italic normal-nums font-normal tracking-[normal] leading-[20.7px] list-outside list-disc min-h-full outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-inter_tight">
            <div className="box-border caret-transparent outline-[3px] no-underline"></div>
            <div className="box-border caret-transparent hidden outline-[3px] relative no-underline overflow-hidden"></div>
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <Header />
              <PrivacyPolicyPage />
              <Footer />
            </div>
            <ChatWidget />
            <div className="box-border caret-transparent h-full outline-[3px] pointer-events-none fixed no-underline w-full z-[9999] left-0 top-0"></div>
            <div className="box-border caret-transparent h-0 outline-[3px] pointer-events-none fixed no-underline w-full z-[9998] left-0 bottom-0"></div>
            <div className="box-border caret-transparent outline-[3px] no-underline">
              <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[9989] left-0 top-0"></div>
              <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[9989] right-0 top-0"></div>
              <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[9989] left-0 bottom-0"></div>
              <div className="box-border caret-transparent outline-[3px] fixed no-underline z-[9989] right-0 bottom-0"></div>
            </div>
          </div>
        }
      />
    </Routes>
  );
};
