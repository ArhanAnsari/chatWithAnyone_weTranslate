import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
    | "en"
    | "de"
    | "fr"
    | "es"
    | "hi"
    | "ja"
    | "la"
    | "ru"
    | "zh"
    | "ar"
    | "da"
    | "nl"
    | "fi"
    | "el"
    | "he"
    | "ga"
    | "it"
    | "lv"
    | "pt"
    | "su"
    | "ur";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
    en: "English",
    de: "German",
    fr: "French",
    es: "Spanish",
    hi: "Hindi",
    ja: "Japanese",
    la: "Latin",
    ru: "Russian",
    zh: "Mandarin",
    ar: "Arabic",
    da: "Danish",
    nl: "Dutch",
    fi: "Finnish",
    el: "Greek",
    he: "Hebrew",
    ga: "Irish",
    it: "Italian",
    lv: "Latvian",
    pt: "Portuguese",
    su: "Sundanese",
    ur: "Urdu",
};

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
    isPro: () => boolean;
}

export const useSubscriptionStore = create<SubscriptionState>()((set, get) => ({
    subscription: undefined,
    // undefined is used to indicate that the subscription is still loading
    // you do not want it to be null 
    setSubscription: (subscription: Subscription | null) => set({ subscription }),
    isPro: () => {
        const subscription = get().subscription;
        if(!subscription) return false;
        return subscription.status === "active" && subscription.role === "pro";
    }
}))