<template>
    <nav>
        <ul>
            <li>
                <img src="../assets/home.png">
                <h2>Home</h2>
            </li>
            <li>
                <img src="../assets/folder.png">
                <h2>Talentos</h2>
            </li>
            <li>
                <img src="../assets/location.png">
                <h2>Sobre</h2>
            </li>
        </ul>
    </nav>

    <div>
        <div>
            <h1>Cadastro de talento</h1>
        </div>

        <div class="input">
            <label>Nome Completo</label>
            <input type="text" id="name" v-model="name">

            <label>Email</label>
            <input type="email" id="email" v-model="email">
        </div>

        <div class="input">
            <label>Data de Nascimento</label>
            <input type="date" id="birthdate" v-model="birthdate">

            <label>Whatsapp</label>
            <input type="number" id="whats" v-model="whats">
        </div>

        <div class="options">
            <select name="Área de Interesse">
                <option>Profissão 1</option>
                <option>Profissão 2</option>
                <option>Profissão 3</option>
                <option>Profissão 4</option>
            </select>
        </div>

        <div class="options">
            <select name="Área de Interesse">
                <option>Junior</option>
                <option>Pleno</option>
                <option>Senior</option>
            </select>
        </div>

        <div class="options">
            <input type="checkbox">
            <label>HTML</label>
            <input type="checkbox">
            <label>CSS3</label>
            <input type="checkbox">
            <label>Javascript</label>
            <input type="checkbox">
            <label>React</label>
            <input type="checkbox">
            <label>React-native</label>
            <input type="checkbox">
            <label>Node</label>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
*{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

li{
    display: flex;
    align-content: space-around;
    flex-direction: row;
}

li{
    border-color: grey;
}

p {
    text-align: left;
    font-size: 12px;
}

</style>
