import { translateMessage } from "@/locales";
import { UiText } from "@ory/client";

interface UiMessagesProps {
    messages?: UiText[];
}

export default function UiMessages({ messages }: UiMessagesProps) {
    if (!messages || messages.length === 0) {
        return null;
    }

    const getMessageStyles = (type: string) => {
        switch (type) {
            case 'error':
                return "bg-red-50 border-red-200 text-red-800";
            case 'success':
                return "bg-green-50 border-green-200 text-green-800";
            case 'info':
            default:
                return "bg-[#5151F4]/10 border-[#5151F4]/20 text-[#5151F4]";
        }
    };

    const getIconForType = (type: string) => {
        switch (type) {
            case 'error':
                return (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                );
            case 'success':
                return (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                );
            case 'info':
            default:
                return (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                );
        }
    };

    return (
        <div className="space-y-3 mb-6">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`p-3 rounded-md border flex items-start space-x-3 ${getMessageStyles(message.type)}`}
                >
                    <div className="flex-shrink-0 mt-0.5">
                        {getIconForType(message.type)}
                    </div>
                    <div className="text-sm">
                        {translateMessage(message)}
                    </div>
                </div>
            ))}
        </div>
    );
} 