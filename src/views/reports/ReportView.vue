<script setup lang="jsx">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
   <div class="row row-xs" id="reports">
          <div class="col-sm-6 col-lg-4 app-info">
            <div class="card card-body">
              <div class="row">
                <h5 class="tx-spacing-1 col-sm-12 tx-color-02 tx-semibold mg-b-8">
                  <a href="/daily-report.html?nav-link=reports">
                    Patient Activity Report
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
</template>
