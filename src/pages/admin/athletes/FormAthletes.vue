<template>
    <q-page padding>
      <div>
        <FormAthleteComponent @submitDataAthlete="createAthlete" />
      </div>
    </q-page>
</template>
  
<script setup>
    import FormAthleteComponent from "../../../components/forms/FormAthleteComponent.vue";
    import { api } from "src/boot/axios";
    import { QSpinnerBall, useQuasar } from "quasar";
    import { useRouter, useRoute } from "vue-router";

    const $q = useQuasar();
    const router = useRouter();
    const route = useRoute();
    const { id } = route.params;

    async function createAthlete(data) {
    data.data_horario = new Date(data.data_horario);
    data.distancia = Number(data.distancia);
    const dados = { ...data };
    console.log("horario", dados);
    console.log("cadastrando", dados);
    $q.loading.show({
        message: "Cadastrando atleta, aguarde...",

        delay: 400,
        spinner: QSpinnerBall,
        spinnerColor: "purple-6",
        spinnerSize: 140,
    });

    try {
        const resposta = await api.post("/atleta", dados);
        if (resposta.status == 201) {
        $q.notify({
            color: "positive",
            icon: "check",
            position: "top",
            timeout: 1000,
            message: "Atleta cadastrado com sucesso",
        });
        } else {
        $q.notify({
            color: "negative",
            icon: "report_problem",
            position: "top",
            timeout: 1000,
            message: "Erro ao cadastrar atleta",
        });
        }
        router.push("/admin/atletas");
        $q.loading.hide();
    } catch (error) {
        $q.loading.hide();
        $q.notify({
        color: "negative",
        icon: "report_problem",
        position: "top",
        timeout: 1000,
        message: "Erro ao cadastrar atleta",
        error,
        });
        console.log(error);
    }
    }

    async function updateAthlete(data) {
        data.data_horario = new Date(data.data_horario);
        data.distancia = Number(data.distancia);
        const dados = { ...data };
        $q.loading.show({
            message: "Buscando informações no servidor...",
            delay: 400,
            spinner: QSpinnerBall,
            spinnerColor: "purple-6",
            spinnerSize: 140,
        });
        
        try {
            const resposta = await api.put(`/atleta/${id}`, dados);

            if (resposta.status == 200) {
                $q.notify({
                    color: "positive",
                    icon: "check",
                    position: "top",
                    timeout: 1000,
                    message: "Atleta atualizado com sucesso",
                });
            } else {
                $q.notify({
                    color: "negative",
                    icon: "report_problem",
                    position: "top",
                    timeout: 1000,
                    message: "Erro ao atualizar atleta",
                });
            }
            router.push("/admin/atletas");
            $q.loading.hide();
        } catch (error) {
            console.log(error);
            $q.loading.hide();
        }
    }

    async function onSubmitAthleteData(data) {
        console.log("cheguei", data);
        if (id) {
            await updateAthlete(data);
        } else {
            console.log("aqui", data);
            await createAthlete(data);
        }
    }
</script>

<style lang="scss" scoped></style>