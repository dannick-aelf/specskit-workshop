'use client';

import { PresentationProvider, usePresentation } from '@/components/presentation/PresentationProvider';
import { SlideContainer } from '@/components/presentation/SlideContainer';
import { NavigationControls } from '@/components/presentation/NavigationControls';
import { SlideTitle } from '@/components/slides/SlideTitle';
import { CommandBlock } from '@/components/slides/CommandBlock';
import { StepCard } from '@/components/slides/StepCard';
import { SectionCard } from '@/components/sections/SectionCard';
import { ImageCard } from '@/components/ui/ImageCard';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { content } from '@/lib/content';
import { useTheme } from '@/app/theme-provider';
import { useTranslation } from '@/lib/useTranslation';

const TOTAL_SLIDES = 28;

function RestartButton() {
  const { goToSlide } = usePresentation();
  const { t } = useTranslation();
  return (
    <button
      onClick={() => goToSlide(0)}
      className="inline-block px-8 py-4 rounded-button bg-primary text-white font-semibold hover:bg-primary-hover transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transform hover:scale-105 active:scale-95"
    >
      {t('startOver')}
    </button>
  );
}

function PresentationContent() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const logoSrc = theme === 'light' ? '/chronoai-logo-light.svg' : '/chronoai-logo.svg';
  
  return (
    <div className="relative min-h-screen bg-background overflow-y-auto">
      {/* Slide 1: Workshop Title */}
      <SlideContainer slideIndex={0}>
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
          <div className="flex flex-col items-center space-y-6 animate-logo-intro">
            <div className="flex justify-center">
              <img 
                src={logoSrc} 
                alt="ChronoAI Logo" 
                className="h-4 md:h-5 w-auto"
              />
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-text-primary tracking-tight">
                {t('workshopTitle')}
          </h1>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-delay">
            <p className="text-xl md:text-2xl text-text-secondary text-center font-medium leading-relaxed">
              {t('workshopDescription')}
            </p>
            
            <div className="rounded-card bg-primary-highlight p-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">💡</div>
                <div>
                  <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t('note') + ' ' + t('noteContent').replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>') }} />
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-text-tertiary text-center">
                {t('ledBy')}
              </p>
            </div>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 2: What You'll Learn */}
      <SlideContainer slideIndex={1}>
        <SlideTitle>{t('whatYoullLearn')}</SlideTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-card bg-surface p-4">
              <p className="text-sm text-text-secondary mb-2 font-semibold">{t('inThisWorkshop')}</p>
              <ul className="text-sm text-text-primary space-y-1 text-left">
                <li>• {t('installSpecKit')}</li>
                <li>• {t('createTemplateProject')}</li>
                <li>• {t('usingSpecKitCommands')}</li>
                <li>• {t('createFirstSpecification')}</li>
                <li>• {t('workflowOverview')}</li>
              </ul>
            </div>
            <div className="rounded-card bg-surface p-4">
              <p className="text-sm text-text-secondary mb-2 font-semibold">{t('youllBeAbleTo')}</p>
              <ul className="text-sm text-text-primary space-y-1 text-left">
                <li>• {t('createFirstSpecification')}</li>
                <li>• {t('generateImplementationPlan')}</li>
                <li>• {t('breakDownIntoTasks')}</li>
                <li>• {t('implementYourFeature')}</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
              {t('howSpecKitBenefits')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:items-stretch">
              <div className="space-y-3 flex flex-col">
                <div className="group relative rounded-card bg-surface p-3 hover:border-primary transition-colors cursor-pointer flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-text-primary mb-1">👥 {t('humanResources')}</p>
                  <p className="text-xs text-text-secondary line-clamp-2 flex-1">{t('humanResourcesShort')}</p>
                  <div className="hidden md:group-hover:block fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md rounded-card bg-surface-elevated border border-primary shadow-2xl p-6 animate-fade-in">
                    <p className="text-lg font-semibold text-text-primary mb-3">👥 {t('humanResources')}</p>
                    <p className="text-base text-text-secondary leading-relaxed">{t('humanResourcesLong')}</p>
                  </div>
                </div>
                <div className="group relative rounded-card bg-surface p-3 hover:border-primary transition-colors cursor-pointer flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-text-primary mb-1">📊 {t('productManagers')}</p>
                  <p className="text-xs text-text-secondary line-clamp-2 flex-1">{t('productManagersShort')}</p>
                  <div className="hidden md:group-hover:block fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md rounded-card bg-surface-elevated border border-primary shadow-2xl p-6 animate-fade-in">
                    <p className="text-lg font-semibold text-text-primary mb-3">📊 {t('productManagers')}</p>
                    <p className="text-base text-text-secondary leading-relaxed">{t('productManagersLong')}</p>
                  </div>
                </div>
                <div className="group relative rounded-card bg-surface p-3 hover:border-primary transition-colors cursor-pointer flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-text-primary mb-1">💼 {t('finance')}</p>
                  <p className="text-xs text-text-secondary line-clamp-2 flex-1">{t('financeShort')}</p>
                  <div className="hidden md:group-hover:block fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md rounded-card bg-surface-elevated border border-primary shadow-2xl p-6 animate-fade-in">
                    <p className="text-lg font-semibold text-text-primary mb-3">💼 {t('finance')}</p>
                    <p className="text-base text-text-secondary leading-relaxed">{t('financeLong')}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 flex flex-col">
                <div className="group relative rounded-card bg-surface p-3 hover:border-primary transition-colors cursor-pointer flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-text-primary mb-1">📢 {t('marketing')}</p>
                  <p className="text-xs text-text-secondary line-clamp-2 flex-1">{t('marketingShort')}</p>
                  <div className="hidden md:group-hover:block fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md rounded-card bg-surface-elevated border border-primary shadow-2xl p-6 animate-fade-in">
                    <p className="text-lg font-semibold text-text-primary mb-3">📢 {t('marketing')}</p>
                    <p className="text-base text-text-secondary leading-relaxed">{t('marketingLong')}</p>
                  </div>
                </div>
                <div className="group relative rounded-card bg-surface p-3 hover:border-primary transition-colors cursor-pointer flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-text-primary mb-1">🎨 {t('designers')}</p>
                  <p className="text-xs text-text-secondary line-clamp-2 flex-1">{t('designersShort')}</p>
                  <div className="hidden md:group-hover:block fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md rounded-card bg-surface-elevated border border-primary shadow-2xl p-6 animate-fade-in">
                    <p className="text-lg font-semibold text-text-primary mb-3">🎨 {t('designers')}</p>
                    <p className="text-base text-text-secondary leading-relaxed">{t('designersLong')}</p>
                  </div>
                </div>
                <div className="group relative rounded-card bg-surface p-3 hover:border-primary transition-colors cursor-pointer flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-text-primary mb-1">⚙️ {t('operations')}</p>
                  <p className="text-xs text-text-secondary line-clamp-2 flex-1">{t('operationsShort')}</p>
                  <div className="hidden md:group-hover:block fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md rounded-card bg-surface-elevated border border-primary shadow-2xl p-6 animate-fade-in">
                    <p className="text-lg font-semibold text-text-primary mb-3">⚙️ {t('operations')}</p>
                    <p className="text-base text-text-secondary leading-relaxed">{t('operationsLong')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 3: What is SpecKit (Brief) */}
      <SlideContainer slideIndex={2}>
        <SlideTitle>{t('whatIsSpecKit')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <SectionCard>
            <div className="space-y-4">
              <p className="text-lg text-text-primary text-center">
                {t('specKitDescription')}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 rounded-card bg-surface-elevated border border-border">
                  <div className="text-3xl mb-2 animate-bounce-in" style={{ animationDelay: '0ms' }}>📋</div>
                  <p className="text-sm text-text-secondary">{t('fiveStepWorkflow')}</p>
                </div>
                <div className="text-center p-4 rounded-card bg-surface-elevated border border-border">
                  <div className="text-3xl mb-2 animate-bounce-in" style={{ animationDelay: '200ms' }}>✍️</div>
                  <p className="text-sm text-text-secondary">{t('plainLanguageSpecs')}</p>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-card bg-primary-highlight">
                <p className="text-sm text-text-secondary text-center">
                  <strong className="text-text-primary">{t('perfectFor')}</strong> {t('perfectForContent')}
                </p>
              </div>
            </div>
          </SectionCard>
        </div>
      </SlideContainer>

      {/* Slide 4: Prerequisites Check */}
      <SlideContainer slideIndex={3}>
        <SlideTitle>{t('checkPrerequisites')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary" dangerouslySetInnerHTML={{ __html: t('prerequisitesDescription').replace(/<code>/g, '<code class="bg-surface px-2 py-1 rounded text-sm font-mono">') }} />
          <CommandBlock
            command="uv --version"
            description={t('checkIfUvInstalled')}
            output="uv 0.x.x"
            copyable={true}
          />
          <div className="rounded-card bg-surface-elevated p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('ifYouSeeVersion')}</p>
            <p className="text-sm text-text-secondary">{t('ifYouSeeVersionContent')}</p>
          </div>
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('ifYouSeeCommandNotFound')}</p>
            <p className="text-sm text-text-secondary mb-2">{t('ifYouSeeCommandNotFoundContent')}</p>
            <ImageCard
              src="/images/uv-not-found.png"
              alt="Terminal showing uv command not found error"
              caption={t('imageUvNotFound')}
            />
            <CommandBlock
              command="curl -LsSf https://astral.sh/uv/install.sh | sh"
              description={t('installUv')}
              copyable={true}
            />
            <p className="text-xs text-text-tertiary mt-2">{t('orUseHomebrew')} <code className="bg-background px-1.5 py-0.5 rounded font-mono">brew install uv</code></p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 5: Install SpecKit */}
      <SlideContainer slideIndex={4}>
        <SlideTitle>{t('installSpecKit')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('installDescription')}
          </p>
          <CommandBlock
            command="uv tool install specify-cli --from git+https://github.com/github/spec-kit.git"
            description={t('installSpecKitCLI')}
            copyable={true}
          />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-secondary">
              {t('installNote')}
            </p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 6: Verify Installation */}
      <SlideContainer slideIndex={5}>
        <SlideTitle>{t('verifyInstallation')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('verifyDescription')}
          </p>
          <CommandBlock
            command="specify version"
            description={t('checkSpecKitVersion')}
            output="SPECIFY\nGitHub Spec Kit - Spec-Driven Development Toolkit\n\nCLI Version: 0.0.22\nTemplate Version: 0.0.90"
            copyable={true}
          />
          <ImageCard
            src="/images/specify-version.png"
            alt="Specify CLI version information"
            caption={t('imageSpecifyVersion')}
          />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('youShouldSeeVersion')}</p>
            <p className="text-sm text-text-secondary">{t('youShouldSeeVersionContent')}</p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 7: Create Template Project */}
      <SlideContainer slideIndex={6}>
        <SlideTitle>{t('createTemplateProject')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('createDescription')}
          </p>
          <CommandBlock
            command="mkdir my-speckit-project && cd my-speckit-project"
            description={t('createAndNavigate')}
            copyable={true}
          />
          <p className="text-xs text-text-tertiary text-center" dangerouslySetInnerHTML={{ __html: t('mkdirExplanation').replace(/<code>/g, '<code class="bg-background px-1.5 py-0.5 rounded font-mono">') }} />
          <p className="text-xs text-text-tertiary text-center">
            {t('orOpenNewProject')}
          </p>
          <CommandBlock
            command="specify init ."
            description={t('initializeSpecKit')}
            output="Template files will be created...\nDo you want to continue? [y/N]:"
            copyable={true}
          />
          <div className="mt-4">
            <ImageCard
              src="/images/specify-init.png"
              alt="Specify init command with confirmation prompt"
              caption={t('imageSpecifyInit')}
            />
          </div>
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t('typeYToConfirm').replace(/<code>/g, '<code class="bg-background px-1.5 py-0.5 rounded font-mono">') }} />
            <p className="text-xs text-text-tertiary mt-2">
              {t('tipProjectName')}
            </p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 8: Choose AI Assistant */}
      <SlideContainer slideIndex={7}>
        <SlideTitle>{t('chooseAIAssistant')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary" dangerouslySetInnerHTML={{ __html: t('chooseAIDescription').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('recommendedCursorAgent')}</p>
            <p className="text-xs text-text-secondary mb-4">{t('recommendedDescription')}</p>
            <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t('selectCursorAgent').replace(/<code>/g, '<code class="bg-background px-1.5 py-0.5 rounded font-mono">') }} />
          </div>
          <ImageCard
            src="/images/ai-assistant-selection.png"
            alt="AI assistant selection menu"
            caption={t('imageAIAssistant')}
          />
        </div>
      </SlideContainer>

      {/* Slide 9: Choose Script Type */}
      <SlideContainer slideIndex={8}>
        <SlideTitle>{t('chooseScriptType')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('chooseScriptDescription')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-card bg-primary-highlight p-4">
              <p className="text-sm font-semibold text-text-primary mb-2">{t('posixShell')}</p>
              <p className="text-xs text-text-secondary">{t('posixShellDescription')}</p>
            </div>
            <div className="rounded-card bg-surface p-4">
              <p className="text-sm font-semibold text-text-primary mb-2">{t('powershell')}</p>
              <p className="text-xs text-text-secondary">{t('powershellDescription')}</p>
            </div>
          </div>
          <p className="text-sm text-text-secondary text-center" dangerouslySetInnerHTML={{ __html: t('useArrowKeys').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
          <ImageCard
            src="/images/script-type-selection.png"
            alt="Script type selection menu"
            caption={t('imageScriptType')}
          />
        </div>
      </SlideContainer>

      {/* Slide 10: Setup Complete */}
      <SlideContainer slideIndex={9}>
        <SlideTitle>{t('setupComplete')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('setupCompleteDescription')}
          </p>
          <ImageCard
            src="/images/next-steps.png"
            alt="SpecKit setup complete with next steps and commands"
            caption={t('imageNextSteps')}
          />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('setupCompleteNote')}</p>
            <p className="text-sm text-text-secondary">
              {t('setupCompleteContent')}
            </p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 11: Using SpecKit Commands */}
      <SlideContainer slideIndex={10}>
        <SlideTitle>{t('usingSpecKitCommands')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('usingCommandsDescription')}
          </p>
          <ImageCard
            src="/images/command-palette.png"
            alt="Cursor command palette showing SpecKit commands after setup"
            caption={t('imageCommandPalette')}
          />
          <div className="space-y-4">
            <StepCard
              stepNumber={1}
              title={t('step1TypeCommand')}
              description={t('step1CommandDescription')}
            />
            <StepCard
              stepNumber={2}
              title={t('step2SelectCommand')}
              description={t('step2CommandDescription')}
            />
            <StepCard
              stepNumber={3}
              title={t('step3ProvideDescription')}
              description={t('step3CommandDescription')}
            />
          </div>
          <div className="mt-6 rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-secondary text-center" dangerouslySetInnerHTML={{ __html: t('noteCommandsAppear').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
          </div>
        </div>
      </SlideContainer>

      {/* Slide 12: Workflow Overview */}
      <SlideContainer slideIndex={11}>
        <SlideTitle>{t('workflowOverview')}</SlideTitle>
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-center text-base text-text-secondary">
            {t('workflowDescription')}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center gap-3 rounded-card bg-surface p-6 min-w-[180px]">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">1</div>
              <h3 className="text-base font-semibold text-text-primary text-center">{t('step1Constitution')}</h3>
              <p className="text-sm text-text-secondary text-center">{t('step1ConstitutionDesc')}</p>
            </div>
            <div className="hidden md:block text-text-tertiary text-2xl">→</div>
            <div className="flex flex-col items-center gap-3 rounded-card bg-surface p-6 min-w-[180px]">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">2</div>
              <h3 className="text-base font-semibold text-text-primary text-center">{t('step2Specify')}</h3>
              <p className="text-sm text-text-secondary text-center">{t('step2SpecifyDesc')}</p>
            </div>
            <div className="hidden md:block text-text-tertiary text-2xl">→</div>
            <div className="flex flex-col items-center gap-3 rounded-card bg-surface p-6 min-w-[180px]">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">3</div>
              <h3 className="text-base font-semibold text-text-primary text-center">{t('step3Plan')}</h3>
              <p className="text-sm text-text-secondary text-center">{t('step3PlanDesc')}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center gap-3 rounded-card bg-surface p-6 min-w-[180px]">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">4</div>
              <h3 className="text-base font-semibold text-text-primary text-center">{t('step4Tasks')}</h3>
              <p className="text-sm text-text-secondary text-center">{t('step4TasksDesc')}</p>
            </div>
            <div className="hidden md:block text-text-tertiary text-2xl">→</div>
            <div className="flex flex-col items-center gap-3 rounded-card bg-surface p-6 min-w-[180px]">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">5</div>
              <h3 className="text-base font-semibold text-text-primary text-center">{t('step5Implement')}</h3>
              <p className="text-sm text-text-secondary text-center">{t('step5ImplementDesc')}</p>
            </div>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 13: Create Constitution */}
      <SlideContainer slideIndex={12}>
        <SlideTitle>{t('step1Title')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('step1Description')}
          </p>
          <CommandBlock
            command="/speckit.constitution"
            description={t('runThisCommand')}
            copyable={false}
          />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('step1WhatThisDoes')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside mb-3">
              <li>{t('step1Does1')}</li>
              <li>{t('step1Does2')}</li>
              <li>{t('step1Does3')}</li>
            </ul>
            <p className="text-sm text-text-primary font-semibold mb-2">{t('step1ExamplePrompts')}</p>
            <div className="space-y-2 text-sm text-text-secondary mb-3">
              <p>• "{t('step1Example1')}"</p>
              <p>• "{t('step1Example2')}"</p>
              <p>• "{t('step1Example3')}"</p>
            </div>
            <p className="text-xs text-text-tertiary">
              {t('step1Tip')}
            </p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 14: Create First Specification */}
      <SlideContainer slideIndex={13}>
        <SlideTitle>{t('step2Title')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('step2Description')}
          </p>
          <CommandBlock
            command="/speckit.specify I want to add user authentication"
            description={t('runThisCommand')}
            copyable={false}
          />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('step2ThisWill')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside mb-3">
              <li>{t('step2Will1')}</li>
              <li>{t('step2Will2')}</li>
              <li>{t('step2Will3')}</li>
            </ul>
            <p className="text-sm text-text-primary font-semibold mb-2">{t('step2ExamplePrompts')}</p>
            <div className="space-y-2 text-sm text-text-secondary mb-3">
              <p>• <code className="bg-background px-1.5 py-0.5 rounded font-mono text-xs">{t('step2Example1')}</code></p>
              <p>• <code className="bg-background px-1.5 py-0.5 rounded font-mono text-xs">{t('step2Example2')}</code></p>
              <p>• <code className="bg-background px-1.5 py-0.5 rounded font-mono text-xs">{t('step2Example3')}</code></p>
            </div>
            <p className="text-xs text-text-tertiary">{t('step2Tip')}</p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 15: Generate Plan */}
      <SlideContainer slideIndex={14}>
        <SlideTitle>{t('step3Title')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('step3Description')}
          </p>
          <CommandBlock
            command="/speckit.plan"
            description={t('runThisCommand')}
            copyable={false}
          />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('step3ThisCreates')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside mb-3">
              <li>{t('step3Creates1')}</li>
              <li>{t('step3Creates2')}</li>
              <li>{t('step3Creates3')}</li>
            </ul>
            <p className="text-sm text-text-secondary">
              <strong className="text-text-primary">{t('step3NoPromptNeeded')}</strong>
            </p>
          </div>
          <ImageCard
            src="/images/file-structure.png"
            alt="File structure showing spec files"
            caption={t('imageFileStructure')}
          />
        </div>
      </SlideContainer>

      {/* Slide 16: Generate Tasks */}
      <SlideContainer slideIndex={15}>
        <SlideTitle>{t('step4Title')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('step4Description')}
          </p>
          <CommandBlock
            command="/speckit.tasks"
            description={t('runThisCommand')}
            copyable={false}
          />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('step4ThisGenerates')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside mb-3">
              <li>{t('step4Generates1')}</li>
              <li>{t('step4Generates2')}</li>
              <li>{t('step4Generates3')}</li>
            </ul>
            <p className="text-sm text-text-secondary">
              <strong className="text-text-primary">{t('step4NoPromptNeeded')}</strong>
            </p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 17: Implement */}
      <SlideContainer slideIndex={16}>
        <SlideTitle>{t('step5Title')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('step5Description')}
          </p>
          <CommandBlock
            command="/speckit.implement"
            description={t('runThisCommand')}
            copyable={false}
          />
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('step5ThisWill')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside mb-3">
              <li>{t('step5Will1')}</li>
              <li>{t('step5Will2')}</li>
              <li>{t('step5Will3')}</li>
            </ul>
            <p className="text-sm text-text-secondary mb-3">
              <strong className="text-text-primary">{t('step5NoPromptNeeded')}</strong>
            </p>
            <p className="text-xs text-text-tertiary">
              {t('step5Tip')}
            </p>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 18: Helpful Commands */}
      <SlideContainer slideIndex={17}>
        <SlideTitle>{t('helpfulCommands')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('helpfulCommandsDescription')}
          </p>
          
          <div className="space-y-6">
            {/* Clarify Command */}
            <div className="rounded-card bg-surface p-5">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {t('clarifyCommand')}
              </h3>
              <p className="text-sm text-text-secondary mb-3" dangerouslySetInnerHTML={{ __html: t('clarifyDescription').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
              <div className="rounded-card bg-surface-elevated p-3 mb-3">
                <p className="text-xs text-text-tertiary mb-2">{t('whenToUse')}</p>
                <ul className="text-xs text-text-secondary space-y-1 list-disc list-inside">
                  <li>{t('clarifyWhenToUse1')}</li>
                  <li>{t('clarifyWhenToUse2')}</li>
                  <li>{t('clarifyWhenToUse3')}</li>
                </ul>
              </div>
              <CommandBlock
                command="/speckit.clarify"
                description={t('runThisCommand')}
                copyable={false}
              />
              <p className="text-xs text-text-tertiary mt-3">
                {t('clarifyTip')}
              </p>
            </div>

            {/* Analyze Command */}
            <div className="rounded-card bg-surface p-5">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                /speckit.analyze
              </h3>
              <p className="text-sm text-text-secondary mb-3">
                Check consistency across all your SpecKit documents. Run this <strong className="text-text-primary">after /speckit.tasks</strong> and <strong className="text-text-primary">before /speckit.implement</strong>.
              </p>
              <div className="rounded-card bg-surface-elevated p-3 mb-3">
                <p className="text-xs text-text-tertiary mb-2">When to use:</p>
                <ul className="text-xs text-text-secondary space-y-1 list-disc list-inside">
                  <li>You want to verify everything is aligned</li>
                  <li>Check for inconsistencies between spec, plan, and tasks</li>
                  <li>Ensure quality before implementation</li>
                </ul>
              </div>
              <CommandBlock
                command="/speckit.analyze"
                description="Run this command:"
                copyable={false}
              />
              <p className="text-xs text-text-tertiary mt-3">
                💡 This generates a report showing any inconsistencies or issues across your spec.md, plan.md, and tasks.md files.
              </p>
            </div>

            {/* Checklist Command */}
            <div className="rounded-card bg-surface p-5">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {t('checklistCommand')}
              </h3>
              <p className="text-sm text-text-secondary mb-3" dangerouslySetInnerHTML={{ __html: t('checklistDescription').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
              <div className="rounded-card bg-surface-elevated p-3 mb-3">
                <p className="text-xs text-text-tertiary mb-2">{t('whenToUse')}</p>
                <ul className="text-xs text-text-secondary space-y-1 list-disc list-inside">
                  <li>{t('checklistWhenToUse1')}</li>
                  <li>{t('checklistWhenToUse2')}</li>
                  <li>{t('checklistWhenToUse3')}</li>
                </ul>
              </div>
              <CommandBlock
                command="/speckit.checklist"
                description={t('runThisCommand')}
                copyable={false}
              />
              <p className="text-xs text-text-tertiary mt-3">
                {t('checklistTip')}
              </p>
            </div>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 20: Exercise Introduction */}
      <SlideContainer slideIndex={19}>
        <SlideTitle>{t('letsPractice')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <SectionCard>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary text-center">
                {t('exerciseTitle')}
              </h3>
              <p className="text-base text-text-secondary text-center">
                {t('exerciseDescription')}
              </p>
              <div className="rounded-card bg-surface-elevated p-4">
                <p className="text-sm text-text-primary font-semibold mb-2">{t('whatWellBuild')}</p>
                <p className="text-sm text-text-secondary">
                  {t('whatWellBuildContent')}
                </p>
              </div>
            </div>
          </SectionCard>
        </div>
      </SlideContainer>

      {/* Slide 21: Exercise Step 1 */}
      <SlideContainer slideIndex={20}>
        <SlideTitle>{t('exerciseStep1')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('exerciseStep1Description')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4 bg-primary-highlight">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep1Metaphor')}</p>
            <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t('exerciseStep1MetaphorContent').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
          </div>
          <CommandBlock
            command="/speckit.constitution"
            description={t('exerciseStep1CommandDescription')}
            copyable={false}
          />
          <p className="text-sm text-text-secondary">
            <strong className="text-text-primary">{t('exerciseStep1WhatHappens')}</strong> {t('exerciseStep1WhatHappensContent')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep1SuggestedPrinciples')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
              <li>{t('exerciseStep1Principle1')}</li>
              <li>{t('exerciseStep1Principle2')}</li>
              <li>{t('exerciseStep1Principle3')}</li>
            </ul>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 22: Exercise Step 2 */}
      <SlideContainer slideIndex={21}>
        <SlideTitle>{t('exerciseStep2')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('exerciseStep2Description')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4 bg-primary-highlight">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep2Metaphor')}</p>
            <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t('exerciseStep2MetaphorContent').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
          </div>
          <CommandBlock
            command={t('exerciseStep2CommandExample')}
            description={t('exerciseStep2CommandDescription')}
            copyable={false}
          />
          <p className="text-sm text-text-secondary">
            <strong className="text-text-primary">{t('exerciseStep2WhatHappens')}</strong> {t('exerciseStep2WhatHappensContent')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep2WhatToExpect')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
              <li>{t('exerciseStep2Expect1')}</li>
              <li>{t('exerciseStep2Expect2')}</li>
              <li>{t('exerciseStep2Expect3')}</li>
            </ul>
          </div>
          <p className="text-xs text-text-tertiary">
            {t('exerciseStep2Tip')}
          </p>

          {/* Personalize Your Form */}
          <div className="rounded-card bg-surface-elevated p-5 mt-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">{t('personalizeYourForm')}</h3>
            <p className="text-sm text-text-secondary mb-4 text-center">
              {t('personalizeDescription')}
            </p>
            
            <div className="space-y-4">
              {/* Style Customization */}
              <div className="rounded-card bg-surface p-4">
                <p className="text-sm font-semibold text-text-primary mb-2">{t('styleDesign')}</p>
                <p className="text-xs text-text-secondary mb-3 text-left">
                  {t('styleDescription')}
                </p>
                <div className="space-y-2 text-left">
                  <div className="rounded-card bg-background p-3">
                    <p className="text-xs text-text-tertiary mb-1">{t('examplePrompt')}</p>
                    <code className="text-xs text-text-primary break-words">
                      {t('styleExample1')}
                    </code>
                  </div>
                  <div className="rounded-card bg-background p-3">
                    <p className="text-xs text-text-tertiary mb-1">{t('examplePrompt')}</p>
                    <code className="text-xs text-text-primary break-words">
                      {t('styleExample2')}
                    </code>
                  </div>
                </div>
              </div>

              {/* UX Logic */}
              <div className="rounded-card bg-surface p-4">
                <p className="text-sm font-semibold text-text-primary mb-2">{t('uxLogic')}</p>
                <p className="text-xs text-text-secondary mb-3 text-left">
                  {t('uxDescription')}
                </p>
                <div className="space-y-2 text-left">
                  <div className="rounded-card bg-background p-3">
                    <p className="text-xs text-text-tertiary mb-1">{t('examplePrompt')}</p>
                    <code className="text-xs text-text-primary break-words">
                      {t('uxExample1')}
                    </code>
                  </div>
                  <div className="rounded-card bg-background p-3">
                    <p className="text-xs text-text-tertiary mb-1">{t('examplePrompt')}</p>
                    <code className="text-xs text-text-primary break-words">
                      {t('uxExample2')}
                    </code>
                  </div>
                  <div className="rounded-card bg-background p-3">
                    <p className="text-xs text-text-tertiary mb-1">{t('examplePrompt')}</p>
                    <code className="text-xs text-text-primary break-words">
                      {t('uxExample3')}
                    </code>
                  </div>
                </div>
              </div>

              {/* Security Measures */}
              <div className="rounded-card bg-surface p-4">
                <p className="text-sm font-semibold text-text-primary mb-2">{t('securityMeasures')}</p>
                <p className="text-xs text-text-secondary mb-3 text-left">
                  {t('securityDescription')}
                </p>
                <div className="space-y-2 text-left">
                  <div className="rounded-card bg-background p-3">
                    <p className="text-xs text-text-tertiary mb-1">{t('examplePrompt')}</p>
                    <code className="text-xs text-text-primary break-words">
                      {t('securityExample1')}
                    </code>
                  </div>
                  <div className="rounded-card bg-background p-3">
                    <p className="text-xs text-text-tertiary mb-1">{t('examplePrompt')}</p>
                    <code className="text-xs text-text-primary break-words">
                      {t('securityExample2')}
                    </code>
                  </div>
                  <div className="rounded-card bg-background p-3">
                    <p className="text-xs text-text-tertiary mb-1">{t('examplePrompt')}</p>
                    <code className="text-xs text-text-primary break-words">
                      {t('securityExample3')}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 23: Exercise Step 3 */}
      <SlideContainer slideIndex={22}>
        <SlideTitle>{t('exerciseStep3')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('exerciseStep3Description')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4 bg-primary-highlight">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep3Metaphor')}</p>
            <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t('exerciseStep3MetaphorContent').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
          </div>
          <CommandBlock
            command="/speckit.plan"
            description={t('exerciseStep3CommandDescription')}
            copyable={false}
          />
          <p className="text-sm text-text-secondary">
            <strong className="text-text-primary">{t('exerciseStep3WhatHappens')}</strong> {t('exerciseStep3WhatHappensContent')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep3WhatToExpect')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
              <li>{t('exerciseStep3Expect1')}</li>
              <li>{t('exerciseStep3Expect2')}</li>
              <li>{t('exerciseStep3Expect3')}</li>
            </ul>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 24: Exercise Step 4 */}
      <SlideContainer slideIndex={23}>
        <SlideTitle>{t('exerciseStep4')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('exerciseStep4Description')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4 bg-primary-highlight">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep4Metaphor')}</p>
            <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t('exerciseStep4MetaphorContent').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
          </div>
          <CommandBlock
            command="/speckit.tasks"
            description={t('exerciseStep4CommandDescription')}
            copyable={false}
          />
          <p className="text-sm text-text-secondary">
            <strong className="text-text-primary">{t('exerciseStep4WhatHappens')}</strong> {t('exerciseStep4WhatHappensContent')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep4WhatToExpect')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
              <li>{t('exerciseStep4Expect1')}</li>
              <li>{t('exerciseStep4Expect2')}</li>
              <li>{t('exerciseStep4Expect3')}</li>
            </ul>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 25: Exercise Step 5 */}
      <SlideContainer slideIndex={24}>
        <SlideTitle>{t('exerciseStep5')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('exerciseStep5Description')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4 bg-primary-highlight">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep5Metaphor')}</p>
            <p className="text-sm text-text-secondary" dangerouslySetInnerHTML={{ __html: t('exerciseStep5MetaphorContent').replace(/<strong>/g, '<strong class="text-text-primary">') }} />
          </div>
          <CommandBlock
            command="/speckit.implement"
            description={t('exerciseStep5CommandDescription')}
            copyable={false}
          />
          <p className="text-sm text-text-secondary">
            <strong className="text-text-primary">{t('exerciseStep5WhatHappens')}</strong> {t('exerciseStep5WhatHappensContent')}
          </p>
          <div className="rounded-card bg-surface-elevated p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('exerciseStep5WhatToExpect')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
              <li>{t('exerciseStep5Expect1')}</li>
              <li>{t('exerciseStep5Expect2')}</li>
              <li>{t('exerciseStep5Expect3')}</li>
            </ul>
          </div>
          <p className="text-xs text-text-tertiary">
            {t('exerciseStep5Tip')}
          </p>
        </div>
      </SlideContainer>

      {/* Slide 26: Preview Your Form */}
      <SlideContainer slideIndex={25}>
        <SlideTitle>{t('previewYourForm')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-center text-text-secondary">
              {t('previewDescription')}
            </p>
          </div>
          <CommandBlock
            command="npm run dev"
            description={t('startDevServer')}
            copyable={true}
          />
          <div className="rounded-card bg-surface-elevated p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('whatToDo')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
              <li>{t('previewStep1')}</li>
              <li>{t('previewStep2')}</li>
              <li>{t('previewStep3')}</li>
              <li>{t('previewStep4')}</li>
            </ul>
          </div>
          <p className="text-xs text-text-tertiary text-center">
            {t('previewTip').replace(/<code>/g, '<code class="bg-background px-1.5 py-0.5 rounded font-mono text-xs">')}
          </p>
        </div>
      </SlideContainer>

      {/* Slide 27: Exercise Outcome */}
      <SlideContainer slideIndex={26}>
        <SlideTitle>{t('exerciseOutcome')}</SlideTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-center text-text-secondary">
            {t('exerciseOutcomeDescription')}
          </p>
          
          <div className="rounded-card bg-surface-elevated p-4 mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">{t('constitutionPrinciplesUsed')}</h3>
            <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
              <li>{t('constitutionPrinciple1')}</li>
              <li>{t('constitutionPrinciple2')}</li>
              <li>{t('constitutionPrinciple3')}</li>
            </ul>
          </div>

          <div className="rounded-card bg-surface-elevated p-4 mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">{t('specificationIterations')}</h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <div className="rounded-card bg-background p-3">
                <p className="font-semibold text-text-primary mb-1">{t('initialSpec')}</p>
                <p>"{t('initialSpecContent')}"</p>
              </div>
              <div className="rounded-card bg-background p-3">
                <p className="font-semibold text-text-primary mb-1">{t('designEnhancement')}</p>
                <p>"{t('designEnhancementContent')}"</p>
              </div>
              <div className="rounded-card bg-background p-3">
                <p className="font-semibold text-text-primary mb-1">{t('uxEnhancement')}</p>
                <p>"{t('uxEnhancementContent')}"</p>
              </div>
              <div className="rounded-card bg-background p-3">
                <p className="font-semibold text-text-primary mb-1">{t('securityEnhancement')}</p>
                <p>"{t('securityEnhancementContent')}"</p>
              </div>
            </div>
          </div>

          <div className="rounded-card bg-surface-elevated p-4 mb-6">
            <p className="text-sm text-text-primary font-semibold mb-4 text-center">
              {t('tryInteractiveForm')}
            </p>
            <div className="w-full overflow-hidden" style={{ marginTop: '20px', marginBottom: '20px' }}>
              <iframe
                src="/preview.html"
                className="w-full rounded-lg border-2 border-border"
                style={{ height: '720px', border: 'none' }}
                title="Interactive Contact Form"
                allow="clipboard-read; clipboard-write"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                scrolling="no"
              />
            </div>
            <p className="text-xs text-text-tertiary text-center mt-3">
              {t('finalFormDescription')}
            </p>
          </div>

          <div className="rounded-card bg-primary-highlight p-4">
            <p className="text-sm text-text-primary font-semibold mb-2">{t('whatThisDemonstrates')}</p>
            <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
              <li>{t('demonstrates1')}</li>
              <li>{t('demonstrates2')}</li>
              <li>{t('demonstrates3')}</li>
            </ul>
          </div>
        </div>
      </SlideContainer>

      {/* Slide 28: FAQ Section */}
      <SlideContainer slideIndex={27}>
        <SlideTitle>{t('faq')}</SlideTitle>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-center text-text-secondary mb-6">
            {t('faqDescription')}
          </p>
          <FAQAccordion items={[
            {
              question: t('faqQ1'),
              answer: t('faqA1')
            },
            {
              question: t('faqQ2'),
              answer: t('faqA2')
            },
            {
              question: t('faqQ3'),
              answer: t('faqA3')
            },
            {
              question: t('faqQ4'),
              answer: t('faqA4')
            },
            {
              question: t('faqQ5'),
              answer: t('faqA5')
            },
            {
              question: t('faqQ6'),
              answer: t('faqA6')
            }
          ]} />
        </div>
      </SlideContainer>

      {/* Slide 29: Thank You & Congratulations */}
      <SlideContainer slideIndex={28}>
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="text-7xl mb-6 animate-bounce-in" style={{ animationDelay: '0ms' }}>🎉</div>
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary tracking-tight">
              {t('congratulations')}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-medium">
              {t('congratulationsDescription')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto w-full space-y-8 animate-fade-in-delay">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
              {t('whatYouveAccomplished')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-card bg-surface border border-border p-6 text-left hover:border-primary transition-colors">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{t('setUpSpecKit')}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t('setUpSpecKitDesc')}</p>
              </div>
              <div className="rounded-card bg-surface border border-border p-6 text-left hover:border-primary transition-colors">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{t('learnedWorkflow')}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t('learnedWorkflowDesc')}</p>
              </div>
              <div className="rounded-card bg-surface border border-border p-6 text-left hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{t('builtFirstFeature')}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t('builtFirstFeatureDesc')}</p>
              </div>
              <div className="rounded-card bg-surface border border-border p-6 text-left hover:border-primary transition-colors">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{t('gainedConfidence')}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{t('gainedConfidenceDesc')}</p>
              </div>
            </div>
            
            <div className="rounded-card bg-surface border border-border p-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary">{t('keepLearning')}</h3>
                <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                  {t('keepLearningContent')}
                </p>
                <div className="pt-4">
                  <RestartButton />
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-text-tertiary">
              {t('thankYou')}
            </p>
          </div>
        </div>
      </SlideContainer>


      <NavigationControls />
    </div>
  );
}

export default function Home() {
  return (
    <PresentationProvider totalSlides={TOTAL_SLIDES}>
      <PresentationContent />
    </PresentationProvider>
  );
}
