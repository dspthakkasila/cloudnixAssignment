$(document).ready(function() {
            const steps = ['step1', 'step2', 'step3'];
            let currentStep = 0;

            function showStep(index) {
                $('.step').addClass('d-none');
                $('#' + steps[index]).removeClass('d-none');
                // Scroll to top of wizard container
                $('.wizard-container')[0].scrollIntoView({ behavior: 'smooth' });
            }

            $('.next-btn').click(function() {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                } else if (currentStep === steps.length - 1) {
                    alert('Your data has been submitted successfully!');
                    window.location.href = '#';
                }
            });

            $('.back-btn').click(function() {
                if (currentStep > 0) {
                    currentStep--;
                    showStep(currentStep);
                }
            });

            // Step 1: Theme selection
            $('.theme-btn').click(function() {
                if ($(this).data('selected') === false) {
                    $('.theme-btn').each(function() {
                        $(this).removeClass('btn-selected').addClass('btn-apply').text('Apply').data('selected', false);
                    });
                    $(this).removeClass('btn-apply').addClass('btn-selected').text('✔').data('selected', true);
                }
            });

            // Step 2: Diagram color changes on focus
            $('.product-type-input').focus(function() {
                $('#product-type-box').removeClass('bg-warning text-dark').addClass('bg-primary text-white');
                $('#category-box').removeClass('bg-primary text-white').addClass('bg-warning text-dark');
                $('#sub-category-box').removeClass('bg-primary text-white').addClass('bg-warning text-dark');
            });

            $('.category-input').focus(function() {
                $('#product-type-box').removeClass('bg-primary text-white').addClass('bg-warning text-dark');
                $('#category-box').removeClass('bg-warning text-dark').addClass('bg-primary text-white');
                $('#sub-category-box').removeClass('bg-primary text-white').addClass('bg-warning text-dark');
            });

            $('.sub-category-input').focus(function() {
                $('#product-type-box').removeClass('bg-primary text-white').addClass('bg-warning text-dark');
                $('#category-box').removeClass('bg-primary text-white').addClass('bg-warning text-dark');
                $('#sub-category-box').removeClass('bg-warning text-dark').addClass('bg-primary text-white');
            });

            // Step 3: Image upload and preview
            $('.product-image-input').change(function() {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        $('#preview-img').attr('src', e.target.result);
                    };
                    reader.readAsDataURL(file);
                }
            });

            // Update preview title and description
            $('.product-name-input').on('input', function() {
                $('#preview-title').text($(this).val() || 'Product Title');
            });

            $('.product-desc-input').on('input', function() {
                $('#preview-desc').text($(this).val() || 'Ease minim eiusmod amet et incididunt magna consectetur. Laborum, ipsum et do exercitation nostrud nostrud ex. Consectetur Lorem nostrum sint, lorem adipiscing, veritatis officia dua eiusmod lorem officia. Non eu non.');
            });

            // Update price
            $('.net-price-input, .list-price-input').on('input', function() {
                const net = $('.net-price-input').val() || '90';
                const list = $('.list-price-input').val() || '100';
                $('#preview-price').html(`<strong>RS ${list} - RS ${net}</strong>`);
            });
        });
