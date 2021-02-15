<template>
    <div class="v-footer">

<!-- Footer -->
  <mdb-footer color="pink" class="font-small pt-0">
    <mdb-container>
      <mdb-row>
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <a class="fb-ic"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="gplus-ic"><i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="pin-ic"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i></a>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020  <a href="https://www.pink-cat.ru"> pink-cat.ru </a>
        &copy; Телефон:  <a href="https://www.pink-cat.ru"> +7(123)-123-45-67 </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
    </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';

export default {
    name: 'v-footer',
    data () {
        return{}
    },
    components : {
        mdbFooter,
        mdbContainer,
        mdbRow,
        mdbCol
    }

}
</script>

<style lang="scss">

</style>