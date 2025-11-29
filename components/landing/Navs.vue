<template>
     <nav @click.stop>
        <ul>
            <li><a href="#home" @click="$emit('link-click')">{{ $t('header.home') }}</a></li>
            <li><a href="#services" @click="$emit('link-click')">{{ $t('header.services') }}</a></li>
            <li><a href="#projects" @click="$emit('link-click')">{{ $t('header.projects') }}</a></li>
            <li><a href="#contact" @click="$emit('link-click')">{{ $t('header.contact') }}</a></li>
        </ul>
  </nav>
</template>