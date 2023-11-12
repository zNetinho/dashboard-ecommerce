import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/components/ui/tabs";
import { FormCreateAccount } from "../form-create-account";
import FormLoginAccount from "../form-login-account";

export default function ModalLoginAccount() {

    return (
        <div className="w-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold font-mono mt-10">Faça login, ou se cadastre.</h1>
            <Tabs defaultValue="login" className="w-[400px] mt-8">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Logue-se</TabsTrigger>
                    <TabsTrigger value="register">Criar conta</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <FormLoginAccount />
                </TabsContent>
                <TabsContent value="register">
                    <FormCreateAccount />
                </TabsContent>
            </Tabs>
        </div>
    );
}
