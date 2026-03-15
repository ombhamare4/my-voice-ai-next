import { TextInputPanel } from "../components/text-input-pannel";
import { VoicePreviewPlaceHolder } from "../components/voice-preview-place-holder";
import { SettingPanel } from "../components/settings-pannel";
export function TextToSpeechView() {
  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col">
        <TextInputPanel />
        <VoicePreviewPlaceHolder  />
      </div>
      <SettingPanel/>
    </div>
  );
}
