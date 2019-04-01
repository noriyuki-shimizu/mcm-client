<template>
    <div id="brand_edit_modal" class="uk-modal-container" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="uk-modal-title">Headline</h2>
            
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import BrandDto from '@/type/BrandDto';

type CustomProp<T> = () => T;

@Component
export default class BrandEditModal extends Vue {
    @Prop({type: Object as CustomProp<BrandDto>})
    private brandDto?: BrandDto;
}
</script>