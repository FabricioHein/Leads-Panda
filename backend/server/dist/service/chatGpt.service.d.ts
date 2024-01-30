import openai from 'openai';
export declare class OpenIaService {
    static getResposta(data: any): Promise<openai.Chat.Completions.ChatCompletionMessage>;
}
